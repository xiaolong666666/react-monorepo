export const RequestMethod = {
	GET: "get",
	POST: "post",
	PUT: "put",
	DELETE: "delete",
	OPTIONS: "options",
};

export const controllers = [];

export function Controller(prefix = "") {
	return function (target) {
		target.prefix = prefix;
	};
}

export function RequestMapping(method = "", url = "") {
	return function (target, propertyKey, descriptor) {
		let path = url || `/${propertyKey}`;
		const controller = {
			path,
			method,
			handler: target[propertyKey],
			constructor: target.constructor,
		};

		controllers.push(controller);
	};
}
