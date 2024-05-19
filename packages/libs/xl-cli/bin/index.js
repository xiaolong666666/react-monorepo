#!/usr/bin/env node

console.log(
	"**************************** welcome to xl cli ****************************",
);

const { program } = require("commander");
const fse = require("fs-extra");
const path = require("path");

// program
// 	.version("0.0.1")
// 	.description("this is xl cli version")
// 	.command("pack [entry]")
// 	.description("this is xl cli entry")
// 	.option("-d --dev", "开发模式")
// 	.option("-p --prod", "生产模式")
// 	.action((entry, type) => {
// 		console.log(`this is xl cli entry: ${entry} ${JSON.stringify(type)}`);
// 	});

program
	.version("0.0.1")
	.description("this is xl cli version")
	.command("create")
	.description("this is xl cli entry")
	.action((entry) => {
		console.log(`copy files start`);
		fse.copy(path.resolve(__dirname, "../template"), process.cwd(), (e) => {
			if (e) {
				console.error(e);
				return;
			}
			console.log("copy files success");
		});
	});

program.parse(process.argv);
