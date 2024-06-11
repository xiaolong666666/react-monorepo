const obs = [];

const createState = (value) => {
	const subscribes = new Set();

	const getters = () => {
		const currrentOb = obs[obs.length - 1];
		if (currrentOb) {
			subscribes.add(currrentOb);
		}
		return value;
	};

	const setters = (newValue) => {
		value = newValue;
		subscribes.forEach((effect) => effect());
	};

	return [getters, setters];
};

const createEffect = (effect) => {
	const execute = () => {
		obs.push(execute);
		effect();
		obs.pop();
	};
	execute();
};

const [char, setChar] = createState("a");

createEffect(() => {
	console.log(`char: ${char()}`);
});

setChar("b");
setChar("c");
