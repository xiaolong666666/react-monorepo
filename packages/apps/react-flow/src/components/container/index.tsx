import React, { useCallback, useEffect, useRef } from "react";
import { createFlow, FlowNode } from "@xl/flow";
import type { FlowNodeProps } from "@xl/flow";
import { FLOW_SIGN } from "../flow/store";
import HorizontalSteps from "../flow/horizontalSteps";

type Props = FlowNodeProps & {};

const Container = (props: Props) => {
	const { updateContext, current, setCurrent } = props;
	const flowRef = useRef<any>();
	const { components = [], operations = [] } =
		flowRef.current?.plugins[current] ?? {};

	useEffect(() => {
		flowRef.current = createFlow(FLOW_SIGN.BACKUP);
	});

	const queryInfo = useCallback(() => {
		(async () => {
			const currentInfo: any = await new Promise<any>(
				(resolve, reject) => {
					resolve({
						checkInfo: {
							username: "admin",
							password: "123",
							remember: true,
						},
						preInfo: {
							note: "this is a pre note",
							gender: "male",
						},
						backUpInfo: {
							username: "backup_admin",
							password: "backup_123",
							remember: false,
						},
						limitInfo: {
							note: "this is a limit note",
							gender: "female",
						},
					});
				},
			);
			updateContext(currentInfo);
		})();
	}, []);

	useEffect(queryInfo, [queryInfo]);

	return (
		<div className="w-screen h-screen p-6">
			<HorizontalSteps
				current={current}
				setCurrent={setCurrent}
				items={flowRef.current?.steps?.map((step: any) => ({
					title: step.title,
				}))}
			/>
			{components?.map((code: string) => (
				<FlowNode key={code} code={code} />
			))}
			<div className="bg-slate-200 flex gap-2 fixed bottom-0 w-screen -mx-6 px-6 py-3">
				{operations?.map((code: string) => (
					<FlowNode key={code} code={code} />
				))}
			</div>
		</div>
	);
};

export default Container;
