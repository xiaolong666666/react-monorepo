const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		vendor: ["react", "react-dom", "react-router-dom"],
	},
	output: {
		filename: "[name].dll.js",
		path: path.resolve(__dirname, "..", "dist", "dll"),
		library: "[name]_[hash]",
	},
	mode: "production",
	plugins: [
		new webpack.DllPlugin({
			name: "[name]_[hash]",
			context: __dirname,
			path: path.resolve(
				__dirname,
				"..",
				"dist",
				"dll",
				"[name].manifest.json",
			),
		}),
	],
};
