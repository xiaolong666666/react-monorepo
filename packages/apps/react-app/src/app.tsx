import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

type Props = {};

// webpack 运行时变量
console.log(process.env.PRIMARY);

const App = (props: Props) => (
	<BrowserRouter>
		<Router />
	</BrowserRouter>
);

export default App;
