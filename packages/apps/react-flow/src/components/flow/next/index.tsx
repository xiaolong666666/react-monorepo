import React from "react";
import { Button } from "antd";
import type { FlowNodeProps } from "@xl/flow";

type Props = FlowNodeProps & {};

const Next = ({ context, updateContext, setCurrent }: Props) => {
	const onVerify = async () => {
		const formKeyList = Object.keys(context.formListener);
		const formInstanceList = Object.values(context.formListener);

		const infoList = await Promise.all(
			formInstanceList.map((form: any) => form.validateFields()),
		);
		let info = formKeyList?.reduce(
			(pre, key, idx) => Object.assign(pre, { [key]: infoList[idx] }),
			{},
		);
		updateContext({ ...info, formListener: [] });
	};

	const onNext = async () => {
		await onVerify();
		setCurrent((prev: number) => prev + 1);
	};
	return (
		<Button type="primary" onClick={onNext}>
			Next
		</Button>
	);
};

export default Next;
