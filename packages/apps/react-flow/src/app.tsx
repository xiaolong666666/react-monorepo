import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

type Props = {};

const App = (props: Props) => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
