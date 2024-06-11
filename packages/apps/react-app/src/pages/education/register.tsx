import React, { useEffect, useRef } from "react";
import { Button } from "@xl/xl-react-design";
import { ValidCore } from "@xl/valid-core";

type Props = {
	showLog: (log: Array<string>) => void;
};

const Education = ({ showLog }: Props) => {
	const coreRef = useRef<any>({});

	useEffect(() => {
		const core: Record<string, any> = new ValidCore();
		coreRef.current = core;

		core.addPlugin("stepInfo", (ctx) => {
			core.addLog("stepInfo: 手机号📱信息确认");
			showLog([...core.getLog()]);
			return ctx;
		});

		core.addPlugin("stepInfo", (ctx) => {
			core.addLog("stepInfo: 邮箱📮信息确认");
			showLog([...core.getLog()]);
			return ctx;
		});

		core.addPlugin("stepInfo", (ctx) => {
			core.addLog("stepInfo: 密码🔒信息确认");
			showLog([...core.getLog()]);
			return ctx;
		});

		core.usePlugin("stepValid", "phoneValidPlugin", /^1[3-9]\d{9}$/);

		core.usePlugin(
			"stepPost",
			"postUrlPlugin",
			"http://192.168.31.144:3006/register",
		);

		core.addPlugin("stepPost", (ctx) => {
			showLog([...core.getLog()]);
			console.log("所有日志：", [...core.getLog()]);
			return ctx;
		});
	}, []);

	const handleClick = () => {
		coreRef.current.rePipe(["stepInfo", "stepPost"]);

		coreRef.current.run();
	};

	const newHandleClick = () => {
		coreRef.current.runWithSteps(["stepPost", "stepInfo"]);
	};
	return (
		<div>
			<Button onClick={handleClick}>注册</Button>
			<Button onClick={newHandleClick}>新注册</Button>
		</div>
	);
};

export default Education;
