const phoneValidPlugin = function (ctx, regexp) {
	return new Promise((resolve, reject) => {
		ctx.current.login.push(`stepValid: 手机号正则【${regexp}】校验中...`);
		ctx.current.login.push("stepValid: 手机号校验成功✅");
		resolve(ctx);
	});
};

const postUrlPlugin = function (ctx, url) {
	return new Promise((resolve, reject) => {
		ctx.current.login.push(`stepPost: 接口提交至 ${url} 中...`);
		setTimeout(() => {
			resolve(ctx);
			ctx.current.login.push(`stepPost: 提交完成✅`);
		}, 1000);
	});
};

const pluginPool = {
	phoneValidPlugin,
	postUrlPlugin,
};

export default pluginPool;
