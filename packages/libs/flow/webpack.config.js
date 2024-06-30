const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.ts"),
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		clean: true,
		library: "@xl/flow",
		libraryTarget: "umd",
		globalObject: "this",
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(tsx|ts|jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
	externals: {
		// 此库有一个对react的peerDependency
		react: "react",
		"react-dom": "react-dom",
	},
};
