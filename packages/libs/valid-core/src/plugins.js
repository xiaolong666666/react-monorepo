import pluginPool from "./pluginPool";

export function mixinPlugins(ValidCore) {
	ValidCore.prototype.addPlugin = function (step, callback) {
		if (this.steps.includes(step)) {
			this.plugins[step].push(callback);
		} else {
			const error = `the step ${step} is not a valid step`;
			// throw new Error(error);
			console.error(error);
		}
	};

	ValidCore.prototype.usePlugin = function (step, pluginName, ...params) {
		if (this.steps.includes(step)) {
			if (pluginPool[pluginName]) {
				this.plugins[step].push((ctx) =>
					pluginPool[pluginName](ctx, ...params),
				);
			} else {
				const error = `the plugin ${pluginName} is not a valid plugin`;
				// throw new Error(error);
				console.error(error);
			}
		} else {
			const error = `the step ${step} is not a valid step`;
			// throw new Error(error);
			console.error(error);
		}
	};
}
