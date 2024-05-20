const { merge } = require("webpack-merge");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const getBaseConfig = require("./webpack.base");

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
});
