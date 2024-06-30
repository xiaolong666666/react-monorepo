const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isDev) => ({
	entry: path.resolve(__dirname, "../src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "static/js/[name].[hash:8].js",
		clean: true,
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader?cacheDirectory"],
			},
			{
				test: /\.(less|css)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"less-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: isDev
				? "static/css/[name].css"
				: "static/css/[name].[contenthash:4].css",
		}),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "../src"),
		},
	},
});
