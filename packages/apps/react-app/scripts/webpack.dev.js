const { merge } = require("webpack-merge");
const getBaseConfig = require("./webpack.base");
const path = require("path");

module.exports = merge(getBaseConfig(true), {
	// 开发环境相关配置
	mode: "development",
	devtool: "eval-cheap-module-source-map",
	devServer: {
		port: 3000,
		compress: false, // 不压缩（热更新快）
		hot: true,
		open: true,
		historyApiFallback: true, // history 路由的 404 问题
		static: {
			// 托管的静态 public 文件
			directory: path.join(__dirname, "../public"),
		},
		proxy: [
			{
				context: ["/api"],
				target: "http://127.0.0.1:3006",
				changeOrigin: true,
				// pathRewrite: {
				// 	"^/api": "",
				// },
			},
		],
	},
});
