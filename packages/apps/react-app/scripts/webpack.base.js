const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = function (isDev) {
	return {
		// 输入
		entry: path.resolve(__dirname, "../src/index.tsx"),
		// 输出
		output: {
			path: path.resolve(__dirname, "../dist"),
			// 每个输出的 js 名称
			// hash、chunkhash、contenthash
			filename: "static/js/[name].[hash:8].js",
			// webpack 4 没有（clean-webpack-plugin）
			// webpack 5 内置（构建前删除一下 dist ）
			clean: true,
			// 打包后的公共路径
			publicPath: isDev ? "/" : "./",
		},

		// 文件优化索引依赖
		// 用于引入文件时可以不写后缀名，本质是一个优先级的顺序（可能会影响构建性能）
		resolve: {
			extensions: [".tsx", ".ts", ".jsx", ".js"],
			alias: {
				"@": path.resolve(__dirname, "../src"),
			},
		},

		// loader：根据不同类型的文件，使用不同的解析器去识别对应文件的内容
		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					exclude: /node_modules/,
					use: [
						{
							// 开启多线程
							loader: "thread-loader",
							options: {
								workers: 3,
							},
						},
						{
							// 缓存文件
							loader: "babel-loader?cacheDirectory",
						},
					],
				},
				{
					// oneOf: 只选一个就行
					oneOf: [
						{
							test: /\.module\.(less|css)/,
							include: [path.resolve(__dirname, "../src")],
							use: [
								isDev
									? "style-loader"
									: MiniCssExtractPlugin.loader,
								{
									loader: "css-loader",
									options: {
										modules: {
											localIdentName:
												"[path][name]__[local]--[hash:base64:5]",
										},
									},
								},
								"postcss-loader", // css 界 loader
								"less-loader",
							],
						},
						{
							test: /\.css$/,
							use: [
								isDev
									? "style-loader"
									: MiniCssExtractPlugin.loader,
								"css-loader",
								"postcss-loader", // css 界 loader
							],
						},
						{
							test: /\.less$/,
							use: [
								isDev
									? "style-loader"
									: MiniCssExtractPlugin.loader,
								"css-loader",
								"postcss-loader", // css 界 loader
								"less-loader",
							],
						},
					],
				},
				{
					test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
					generator: {
						filename: "static/images/[name].[contenthash:8].[ext]",
					},
				},
				{
					test: /\.(mp3|mp4|wmv|flv|rvmb)$/,
					generator: {
						filename: "static/media/[name].[contenthash:8].[ext]",
					},
				},
				{
					test: /\.(woff2?|eot|ttf|otf)$/,
					generator: {
						filename: "static/fonts/[name].[contenthash:8].[ext]",
					},
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
			new webpack.DefinePlugin({
				"process.env.PRIMARY": JSON.stringify(process.env.PRIMARY),
			}),
		],
	};
};
