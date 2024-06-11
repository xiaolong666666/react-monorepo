const path = require("path");
const clear = require("rollup-plugin-clear");
const autoAdd = require("rollup-plugin-auto-add").default;
const typescript = require("rollup-plugin-typescript2");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const alias = require("rollup-plugin-alias");
const postcss = require("rollup-plugin-postcss");
const filesize = require("rollup-plugin-filesize");
const { terser } = require("rollup-plugin-terser");
const multiInput = require("rollup-plugin-multi-input").default;
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

const pack = require("../package.json");

const banner = `/**
* @author: xiaolong
* @license: ${pack.license}
* @version: ${pack.version}
*/`;

module.exports = [
	// esm
	{
		input: "src/**/*",
		output: [
			{
				dir: "esm",
				format: "esm",
				sourceMap: true,
			},
		],
		external: Object.keys(pack.peerDependencies || {}),
		plugins: [
			clear({ targets: ["dist"] }),
			autoAdd({ include: [/src\/(((?!\/).)+?)\/index\.tsx/gi] }),
			typescript({
				tsconfig: path.resolve(__dirname, "./tsconfig.build.json"),
			}),
			peerDepsExternal(),
			alias({
				entries: {
					"@": path.resolve(__dirname, "../src"),
				},
			}),
			postcss({
				minimize: true,
				sourceMap: false,
				extensions: [".less", ".scss"],
				use: [["less"]],
			}),
			filesize(),
			multiInput(),
			resolve(),
			commonjs(),
		],
	},
	// umd
	{
		input: "src/index.tsx", // 相对于项目文件夹的路径
		output: {
			banner,
			dir: "dist",
			format: "umd",
			exports: "named",
			name: "xl-react-design",
			global: {
				react: "React",
			},
		},
		external: Object.keys(pack.peerDependencies || {}),
		plugins: [
			clear({ targets: ["dist"] }),
			autoAdd({ include: [/src\/(((?!\/).)+?)\/index\.tsx/gi] }),
			typescript({
				tsconfig: path.resolve(__dirname, "./tsconfig.umd.json"),
			}),
			peerDepsExternal(),
			alias({
				entries: {
					"@": path.resolve(__dirname, "../src"),
				},
			}),
			postcss({
				minimize: true,
				sourceMap: false,
				extensions: [".less", ".scss"],
				use: [["less"]],
			}),
			filesize(),
			terser(),
			resolve(),
			commonjs(),
		],
	},
];
