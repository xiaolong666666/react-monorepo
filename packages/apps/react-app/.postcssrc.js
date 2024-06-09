const { groups } = require("./colorGroups");
const postcssNesting = require("postcss-nesting");

module.exports = {
	// plugins: {
	// 	autoprefixer: {
	// 		overrideBrowserslist: [
	// 			"Android 4.1",
	// 			"iOS 7.1",
	// 			"Chrome > 31",
	// 			"ff > 31",
	// 			"ie >= 10",
	// 			"last 2 versions", // 包含最后两个版本的主流浏览器
	// 		],
	// 		grid: true, // 启用autoprefixer对Grid布局的支持
	// 	},
	// 	tailwindcss: {},
	// },
	plugins: [
		"autoprefixer",
		"tailwindcss",
		require("postcss-nested"),
		// require("postcss-nesting"),
		//? https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting
		postcssNesting({
			silenceAtNestWarning: true,
		}),
		require("./plugins/postcss-plugins/themePlugin")({ groups }),
	],
};
