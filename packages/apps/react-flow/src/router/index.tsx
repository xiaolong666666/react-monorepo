import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "@/page/home";
import Backup from "@/page/backup";
import Create from "@/page/backup/create";

const routes: Array<RouteObject> = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/backup",
		element: <Backup />,
	},
	{
		path: "/backup/create",
		element: <Create />,
	},
	{
		path: "*",
		element: <div>404 Not Found</div>,
	},
];

const Router = () => useRoutes(routes);

export default Router;
