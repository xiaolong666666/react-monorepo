import React, { ComponentProps } from "react";
import { Steps } from "antd";

const { Step } = Steps;

type Props = ComponentProps<typeof Steps> & {
	current: number;
	setCurrent: (step: number) => void;
};

const HorizontalSteps = ({ current, setCurrent, items, ...rest }: Props) => {
	const onChange = (target: number) => {
		if (target < current) {
			setCurrent(target);
		}
	};
	return (
		<Steps
			size="small"
			current={current}
			onChange={onChange}
			{...rest}
			className="pb-6"
		>
			{items?.map(({ title }: any, idx) => (
				<Step
					key={title}
					title={title}
					disabled={idx >= current}
				></Step>
			))}
		</Steps>
	);
};

export default HorizontalSteps;
