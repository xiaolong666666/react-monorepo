const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const getBaseConfig = require("./webpack.base");

module.exports = merge(getBaseConfig(false), {
	mode: "production",
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin({
				parallel: true,
				terserOptions: {
					compress: {
						drop_console: true,
						pure_funcs: ["console.log", "console.warn"],
					},
				},
			}),
		],

		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
				},
				commons: {
					name: "commons",
				},
			},
		},
	},
});
