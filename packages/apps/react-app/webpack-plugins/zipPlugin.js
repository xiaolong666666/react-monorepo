/**
 * webpack 最后输出产物之前，把文件压缩好，同其他文件一起输出
 */
const JSZip = require("jszip");
const { RawSource } = require("webpack-sources");

class ZipPlugin {
	constructor(options) {
		this.options = options;
	}

	apply(compiler) {
		const context = this;
		compiler.hooks.emit.tapAsync("ZipPlugin", (compilation, callback) => {
			// emit 阶段：生成代码的阶段【可以拿到所有待生成的文件】
			const assets = compilation.assets;
			const zip = new JSZip();

			Object.keys(assets).forEach((fileName) => {
				const source = assets[fileName].source();
				zip.file(fileName, source);
			});

			zip.generateAsync({ type: "nodebuffer" }).then((res) => {
				compilation.assets[context.options.fileName] = new RawSource(
					res,
				);
				callback();
			});
		});
	}
}

module.exports = ZipPlugin;
