import { useEffect, useReducer, useContext } from "react";
import FlowContext from "../../FlowContext";

const UPDATE = "update";
type State = Record<string, any>;
type Action = State & { type: string };

const reducer = (state: State, action: Action) => {
	const { type, payload } = action;
	switch (type) {
		case UPDATE: {
			return { ...state, ...payload };
		}
	}
};

export const useFlow = () => {
	const initialState = {};
	const [context, dispatch] = useReducer<any>(reducer, initialState);

	const updateContext: (v: State) => void = (payload: State) =>
		// @ts-ignore
		dispatch({ type: UPDATE, payload });

	// 收集依赖、一段时间内不再收集后，再更新依赖
	const debounceDelayDepend = (fn: () => void, delay: number) => {
		let timer: number | null = null;
		let args: State = {};
		return function (params: State = {}) {
			// @ts-ignore
			const _this = this;
			Object.keys(params).forEach((key) => {
				if (args[key]) {
					Object.assign(args[key], params[key]);
				} else {
					args[key] = { ...params[key] };
				}
			});
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				// @ts-ignore
				fn.apply(_this, [args]);
			}, delay);
		};
	};

	// @ts-ignore
	const collectForm = debounceDelayDepend(updateContext, 300);

	return [context, updateContext, collectForm];
};

export const useCollectDelay = (form: any, sign: string) => {
	const { context, collectForm } = useContext<any>(FlowContext);

	useEffect(() => {
		collectForm({
			formListener: { ...context.formListener, [sign]: form },
		});
	}, [form]);

	useEffect(() => {
		form.setFieldsValue({
			...context[sign],
		});
	}, [form, context, context[sign]]);
};
