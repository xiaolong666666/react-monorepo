export function mixinEngine(ValidCore) {
	ValidCore.prototype._run = function (steps) {
		this.context.current.login = [];
		(steps || this.steps)
			.reduce((pre, current) => [...pre, ...this.plugins[current]], [])
			.reduce(
				(prePromiseChain, currentPromiseChain) =>
					prePromiseChain.then((res) => currentPromiseChain(res)),
				Promise.resolve(this.context),
			);
	};

	ValidCore.prototype.rePipe = function (steps) {
		this.steps = steps;
	};

	ValidCore.prototype.run = function () {
		return this._run();
	};

	ValidCore.prototype.runWithSteps = function (steps) {
		return this._run(steps);
	};
}
