function CreateStore(options = {}) {
	this.prefix = "__XL__STORE__";
	this.unLocal = options.unLocal; // window【浏览器】 | global【node】
	this.shouldFetch = options.shouldFetch;
	this.maxLength = options.maxLength || 30;
	this.expireTime = options.expireTime || NaN;
	this.plugins = options.plugins || [];
	this.now = Date.now();

	this.observe();
}

CreateStore.prototype.observe = function () {
	const _this = this;
	this._store_storage = new Proxy(
		{},
		{
			get: (target, key, receiver) => {
				let result;

				if (!_this.unLocal) {
					// 存储本地
					result =
						_this.getItem(key) ||
						Reflect.get(target, key, receiver);
				} else {
					result = Reflect.get(target, key, receiver);
				}

				return result;
			},
			set: (target, key, value, receiver) => {
				let _value = value;
				// 劫持数据
				if (value instanceof Array && value.length > _this.maxLength) {
					_value = value.slice(0, _this.maxLength);
				}
				if (
					this.expireTime &&
					this.expireTime + _this.now < Date.now()
				) {
					// 过期清除
				}
				if (_this.shouldFetch) {
					// fetch
				}
				if (!_this.unLocal) {
					// 存储本地
					this.setItem(key, _value);
				}

				return Reflect.set(target, key, _value, receiver);
			},
		},
	);
};

CreateStore.prototype.getItem = function (key) {
	let dataJSON;
	try {
		dataJSON = window[this.storageMethod].getItem(key);
	} catch (e) {
		console.error("error: ", e.message);
		return;
	}
	let data;
	try {
		data = JSON.parse(dataJSON);
	} catch (e) {
		console.error("error: ", e.message);
		return;
	}
	return data;
};

CreateStore.prototype.setItem = function (key, value) {
	const dataJSON = JSON.stringify(value);
	try {
		window[this.storageMethod].setItem(key, dataJSON);
	} catch (e) {
		console.error("error: ", e.message);
	}
};

// 对外提供 API
CreateStore.prototype.get = function (key) {
	return this._store_storage[`${this.prefix}${key}__`];
};

CreateStore.prototype.set = function (key, value) {
	this._store_storage[`${this.prefix}${key}__`] = value;
};

const methodList = [
	"push",
	"pop",
	"unshift",
	"shift",
	"reverse",
	"sort",
	"splice",
];

methodList.forEach((method) => {
	CreateStore.prototype[method] = function (key, ...rest) {
		if (!this.get(key)) this.set(key, []);
		try {
			const list = this.get(key);
			Array.prototype[method].apply(list, rest);
			this.set(key, list);
		} catch (e) {
			console.error("error: ", e.message);
		}
	};
});

// 继承的子类【构造器】
export function CreateLocalStore(options) {
	CreateStore.call(this, options);
	this.storageMethod = "localStorage";
}

CreateLocalStore.prototype = Object.create(CreateStore.prototype);
CreateLocalStore.constructor = CreateLocalStore;

export function CreateSessionStore(options) {
	CreateStore.call(this, options);
	this.storageMethod = "sessionStorage";
}

CreateSessionStore.prototype = Object.create(CreateStore.prototype);
CreateSessionStore.constructor = CreateSessionStore;

// *************************** TESTS ***************************
const localStore = new CreateLocalStore();
// localStore.set("hello", ["this is the data"]);
// localStore.push("hello", "this is the data2");
