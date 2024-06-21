const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const getBaseConfig = require("./webpack.base");
const ZipPlugin = require("../plugins/webpack-plugins/zipPlugin");

module.exports = merge(getBaseConfig(false), {
	// 生产环境相关配置
	mode: "production",

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin({
				parallel: true, // 并行
				terserOptions: {
					compress: {
						// drop_console: true,
						pure_funcs: ["console.log", "console.warn"],
					},
				},
			}),
		],

		// 代码自动分包
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					// minChunk: 3,
					// minSize: xx,
					// 自己去配置的话效果可能还不如 webpack 默认的效果好，所以尽量不要自己设置
				},
				commons: {
					name: "commons",
				},
			},
		},
	},

	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require("../dist/dll/vendor.manifest.json"),
		}),
		new AddAssetHtmlWebpackPlugin({
			filepath: path.resolve(__dirname, "../dist/dll/vendor.dll.js"),
			outputPath: "../dist/dll", // 文件输出目录
			publicPath: "./dll/", // 脚本或链接标签的公共路径
			includeSourcemap: false,
		}),
		new ZipPlugin({
			fileName: "front.zip",
		}),
	],
});
