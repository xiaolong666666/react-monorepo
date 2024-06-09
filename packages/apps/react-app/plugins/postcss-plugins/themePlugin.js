const postcss = require("postcss");

const deafults = {
	functionName: "xl",
	groups: {},
	dataThemeSelector: "html[data-theme='dark']",
	nestingPlugin: null,
};

module.exports = postcss.plugin("postcss-theme-color", (options) => {
	options = Object.assign({}, deafults, options);
	const reGroup = new RegExp(`\\b${options.functionName}\\(([^)]+)\\)`, "g");

	return (css, result) => {
		const getValue = (value, theme) =>
			value.replace(reGroup, (_, group) => options.groups[group][theme]);

		const hasPlugin = (name) =>
			name.replace(/^postcss-/, "") === options.nestingPlugin ||
			result.processor.plugins.some((p) => p.postcssPlugin === name);

		// 遍历所有样式
		css.walkDecls((decl) => {
			const value = decl.value;
			// 判断 value 是否有 xl(*)
			if (!value || !reGroup.test(value)) return;

			const lightValue = getValue(value, "light");
			const darkValue = getValue(value, "dark");

			const darkDecl = decl.clone({ value: darkValue });
			let darkRule;
			// 利用 nested nesting 去生成 dark 样式
			if (hasPlugin("postcss-nesting")) {
				darkRule = postcss.atRule({
					name: "nest",
					params: `${options.dataThemeSelector} &`,
				});
			} else if (hasPlugin("postcss-nested")) {
				darkRule = postcss.rule({
					params: `${options.dataThemeSelector} &`,
				});
			} else {
				decl.warn(result, "no plugins");
			}

			if (darkRule) {
				darkRule.append(darkDecl);
				decl.after(darkRule);
			}

			const lightDecl = decl.clone({ value: lightValue });
			decl.replaceWith(lightDecl);
		});
	};
});
