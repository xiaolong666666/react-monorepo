import React, { useContext } from "react";
import Flow from "../..";
import FlowContext from "../../FlowContext";
import defaultComponent from "../defaultComponent";

export type FlowNodeProps = {
	context: Record<string, any>;
	updateContext: (context: FlowNodeProps["context"]) => void;
	collectForm: (context: FlowNodeProps["context"]) => void;
	current: number;
	setCurrent: (current: FlowNodeProps["current"]) => void;
};

type Props = {
	code: string;
	[key: string]: any;
};

const FlowNode = ({ code, ...restProps }: Props) => {
	const store = useContext(FlowContext);
	const componentMappper = Flow.mapper;
	const ComponentNode = componentMappper[code] ?? defaultComponent;
	return <ComponentNode code={code} {...store} {...restProps} />;
};

export default FlowNode;
