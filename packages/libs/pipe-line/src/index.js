/************** utils **************/
// 顺序执行
// 只是不断地执行函数，参数本身不传递【执行流程的时候，参数不用返回】
const syncFn = (fns) => (rest) =>
	fns.reduce((pre, current) => current({}), rest);

// 瀑布
// 前一个函数的返回值是下一个函数的入参
const waterFallSyncFn = (fns) => (rest) =>
	fns.reduce((pre, current) => current(pre), rest);

// 熔断
// 如果前一个函数返回了特定值【如：undefined】，那么后续的函数中断执行
const boilSyncFn = (fns) => (rest) =>
	fns.reduce((pre, current) => (pre ? current(pre) : pre), rest);

const asyncFn = (fns) => (rest) =>
	new Promise((resolve, reject) =>
		fns
			.reduce(
				(pre, current) => pre.then((res) => current({})).catch(reject),
				Promise.resolve(rest),
			)
			.then(resolve),
	);

const waterFallAsyncFn = (fns) => (rest) =>
	new Promise((resolve, reject) =>
		fns
			.reduce(
				(pre, current) => pre.then((res) => current(res)).catch(reject),
				Promise.resolve(rest),
			)
			.then(resolve),
	);

const boilAsyncFn = (fns) => (rest) =>
	new Promise((resolve, reject) =>
		fns
			.reduce(
				(pre, current) =>
					pre
						.then((res) =>
							res ? current(res) : Promise.resolve(res),
						)
						.catch(reject),
				Promise.resolve(rest),
			)
			.then(resolve),
	);

// function Pa(ctx) {
// 	// ctx = { fn1: "Pa" };
// 	ctx.fn1 = "Pa";
// 	console.log("Pa", ctx);
// 	return ctx;
// }

// function Pb(ctx) {
// 	// ctx = { fn2: "Pb" };
// 	ctx.fn2 = "Pb";
// 	console.log("Pb", ctx);
// 	return undefined;
// }

// function Pc(ctx) {
// 	// ctx = { fn3: "Pc" };
// 	ctx.fn3 = "Pc";
// 	console.log("Pc", ctx);
// 	return ctx;
// }

function asyncPa(ctx) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// ctx = { fn1: "asyncPa" };
			ctx.fn1 = "asyncPa";
			console.log("asyncPa", ctx);
			resolve(ctx);
		}, 1000);
	});
}

function asyncPb(ctx) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// ctx = { fn2: "asyncPb" };
			ctx.fn2 = "asyncPb";
			console.log("asyncPb", ctx);
			resolve(ctx);
		}, 1000);
	});
}

function asyncPc(ctx) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// ctx = { fn3: "asyncPc" };
			ctx.fn3 = "asyncPc";
			console.log("asyncPc", ctx);
			resolve(ctx);
		}, 1000);
	});
}

const fns = [asyncPa, asyncPb, asyncPc];

// const pipe = boilAsyncFn(fns);
// pipe({});

// --------------------------------- pipe 编排 --------------------------------- //
const data = {
	nodes: [
		{ name: "foo", value: "myFoo" },
		{ name: "bar", value: "myBar" },
		{ name: "bar", value: "myBar2" },
		{ name: "baz", value: "myBaz" },
	],
};

const resolveFormat = (data) => {
	if (data?.nodes && data?.nodes instanceof Array) return data;
	else return { nodes: [] };
};

const resolveRepeat = (data) => {
	const nodes = data.nodes;
	let map = new Map();
	for (let i = 0; i < nodes.length; i++) {
		if (map.has(nodes[i].name)) {
			const idx = map.get(nodes[i].name);
			nodes[idx].value =
				nodes[idx].value instanceof Array
					? nodes[idx].value.concat(nodes[i].value)
					: [nodes[idx].value, nodes[i].value];
			nodes.splice(i, 1);
			i--;
		} else {
			map.set(nodes[i].name, i);
		}
	}

	return data;
};

const resolveNodes = (data) =>
	data.nodes.reduce(
		(pre, current) => ({ ...pre, [current.name]: current.value }),
		{},
	);

// 原子化函数编排
const pipe = waterFallSyncFn([resolveFormat, resolveRepeat, resolveNodes]);
console.log(pipe(data));
