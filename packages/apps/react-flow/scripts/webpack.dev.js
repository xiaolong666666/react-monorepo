const path = require("path");
const { merge } = require("webpack-merge");
const getBaseConfig = require("./webpack.base");

module.exports = merge(getBaseConfig(true), {
	mode: "development",
	devtool: "eval-cheap-module-source-map",
	devServer: {
		port: 3000,
		compress: false,
		hot: true,
		open: true,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "../public"),
		},
		client: {
			overlay: false, // 错误不暴露在页面上
			progress: false,
		},
	},
});
