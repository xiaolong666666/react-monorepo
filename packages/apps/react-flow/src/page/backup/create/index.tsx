import React from "react";
import { setMapper, setStore, FlowProvider } from "@xl/flow";
import store from "@/components/flow/store";
import mapper from "@/components/flow/mapper";
import Container from "@/components/container";

type Props = {};

setStore(store);
setMapper(mapper);

const Create = (props: Props) => {
	return (
		<FlowProvider>
			<Container />
		</FlowProvider>
	);
};

export default Create;
