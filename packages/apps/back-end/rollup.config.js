const babel = require("rollup-plugin-babel");

module.exports = {
	input: "./src/index.js",
	output: {
		file: "./dist/bundle.js",
		format: "umd",
		name: "xlServer",
	},

	treeshake: false,

	plugins: [
		babel({
			runtimeHelpers: true,
			extensions: [".ts", ".js"],
			exclude: "node_modules/**",
			externalHelpers: true,
		}),
	],
};
