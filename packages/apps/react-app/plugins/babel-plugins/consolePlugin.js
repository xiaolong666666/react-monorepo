const generator = require("@babel/generator").default;

// 访问者模式
const consolePlugin = function ({ types }) {
	return {
		visitor: {
			CallExpression(path) {
				const name = generator(path.node.callee).code;
				if (
					["console.log", "console.warn", "console.error"].includes(
						name,
					)
				) {
					const { line, column } = path.node.loc.start;
					path.node.arguments.unshift(
						types.stringLiteral(`filename: ${line}:${column}`),
					);
				}
			},
		},
	};
};

module.exports = consolePlugin;
