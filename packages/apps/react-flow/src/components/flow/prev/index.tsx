import React from "react";
import { Button } from "antd";
import type { FlowNodeProps } from "@xl/flow";

type Props = FlowNodeProps & {};

const Prev = ({ setCurrent }: Props) => {
	const onPrev = () => {
		setCurrent((prev: number) => prev - 1);
	};
	return <Button onClick={onPrev}>Prev</Button>;
};

export default Prev;
