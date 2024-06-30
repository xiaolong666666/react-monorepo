import { FlowProvider } from "./FlowContext";
import FlowNode from "./components/flowNode";
export type { FlowNodeProps } from "./components/flowNode";
export { useCollectDelay } from "./utils/hooks";

type Mapper = Record<string, any>;
type Store = Record<string, any>;
type Category = string;

class Flow {
	static mapper: Mapper;
	static store: Store;
	steps: any;
	plugins: any;
	constructor(category: Category) {
		this.init(category);
	}

	init(category: Category) {
		this.steps = Flow.store[category].map(({ title }: Store) => ({
			title,
		}));
		this.plugins = Flow.store[category];
	}
}

function setMapper(mapper: Mapper) {
	Flow.mapper = mapper;
}

function setStore(store: Store) {
	Flow.store = store;
}

function createFlow(category: Category) {
	return new Flow(category);
}

export { setMapper, setStore, createFlow, FlowProvider, FlowNode };

export default Flow;
