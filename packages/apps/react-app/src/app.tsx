import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { useAuth } from "@/utils/hooks";

type Props = {};

// webpack 运行时变量
process.env.PRIMARY && console.log(process.env.PRIMARY);

const App = (props: Props) => {
	useAuth();

	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
