export function mixinLog(ValidCore) {
	ValidCore.prototype.addLog = function (str) {
		this.context.current.login.push(str);
	};

	ValidCore.prototype.getLog = function () {
		return this.context.current.login;
	};
}
