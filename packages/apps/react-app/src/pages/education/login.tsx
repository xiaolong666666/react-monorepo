import React from "react";
import Button from "@/components/button";
import { ValidCore } from "@xl/valid-core";

type Props = {
	showLog: (log: Array<string>) => void;
};

const Education = ({ showLog }: Props) => {
	const handleClick = () => {
		const core: Record<string, any> = new ValidCore();

		core.addPlugin("stepInfo", (ctx) => {
			core.addLog("stepValid: 手机号📱信息确认");
			showLog([...core.getLog()]);
			return ctx;
		});

		core.addPlugin("stepInfo", (ctx) => {
			core.addLog("stepValid: 密码🔒信息确认");
			showLog([...core.getLog()]);
			return ctx;
		});

		core.usePlugin(
			"stepPost",
			"postUrlPlugin",
			"http://192.168.31.144:3006/login",
		);

		core.addPlugin("stepPost", (ctx) => {
			showLog([...core.getLog()]);
			console.log("所有日志：", [...core.getLog()]);
			return ctx;
		});

		core.run();
	};
	return (
		<div>
			<Button onClick={handleClick}>登录</Button>
		</div>
	);
};

export default Education;
