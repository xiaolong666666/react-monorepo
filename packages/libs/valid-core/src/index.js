import { mixinEngine } from "./engine";
import { mixinPlugins } from "./plugins";
import { mixinLog } from "./log";

export const ValidCore = function () {
	this.init();
};

ValidCore.prototype.init = function () {
	this.steps = ["stepInfo", "stepValid", "stepPost"];

	// 多个插件
	this.plugins = this.steps.reduce(
		(pre, current) => ({ ...pre, [current]: [] }),
		{},
	);

	this.context = {
		current: {},
	};
};

mixinEngine(ValidCore);
mixinPlugins(ValidCore);
mixinLog(ValidCore);
