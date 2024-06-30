import React, {
	useState,
	createContext,
	ReactNode,
	isValidElement,
	cloneElement,
} from "react";
import { useFlow } from "./utils/hooks";

const FlowContext = createContext({});

type FlowProviderProps = {
	children: ReactNode;
};

export const FlowProvider = ({ children }: FlowProviderProps) => {
	const [context, updateContext, collectForm] = useFlow();
	const [current, setCurrent] = useState(0);
	const value = { context, updateContext, collectForm, current, setCurrent };

	return (
		<FlowContext.Provider value={value}>
			{isValidElement(children)
				? cloneElement(children, {
						...children.props,
						...value,
					})
				: children}
		</FlowContext.Provider>
	);
};

export default FlowContext;
