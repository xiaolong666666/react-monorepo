import React, { ReactNode } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import Recommend from "@/pages/home/recommend";
import Education from "@/pages/education";

type ExtraBizObject = {
	title?: ReactNode;
};

type ZHRoute = RouteObject & ExtraBizObject;

export const routes: Array<ZHRoute> = [
	{
		path: "/",
		element: <Home />,
		title: "首页",
		children: [
			{ path: "", element: <Recommend /> },
			{ path: "/follow", element: <div>关注</div> },
			{ path: "/hot", element: <div>热榜</div> },
			{ path: "/zvideo", element: <div>视频</div> },
		],
	},
	{
		path: "/education/learning",
		element: <Education />,
		title: "知乎知学堂",
	},
	{
		path: "/explore",
		element: <div>发现</div>,
		title: (
			<div className="flex items-center gap-0.5">
				<svg
					width="16"
					height="18"
					viewBox="0 0 16 16"
					className="css-45s3z9"
					fill="none"
				>
					<path
						fill="currentColor"
						d="m4.851 9.588-2.887-.722a.48.48 0 0 1 0-.932l2.887-.722a2.146 2.146 0 0 0 1.561-1.561l.722-2.887a.48.48 0 0 1 .932 0l.722 2.887c.192.769.792 1.369 1.561 1.561l2.887.722a.48.48 0 0 1 0 .932l-2.887.722a2.146 2.146 0 0 0-1.561 1.561l-.722 2.887a.48.48 0 0 1-.932 0l-.722-2.887a2.146 2.146 0 0 0-1.561-1.561ZM12.175 1.408a.24.24 0 0 1 .45 0l.404 1.09a.8.8 0 0 0 .472.473l1.09.404a.24.24 0 0 1 0 .45l-1.09.403a.8.8 0 0 0-.472.473l-.404 1.09a.24.24 0 0 1-.45 0l-.403-1.09a.8.8 0 0 0-.473-.473l-1.09-.403a.24.24 0 0 1 0-.45l1.09-.404a.8.8 0 0 0 .473-.472l.403-1.09Z"
					></path>
				</svg>
				发现
			</div>
		),
	},
	{
		path: "/question/waiting",
		element: <div>等你来答</div>,
		title: "等你来答",
	},
];

const Router = () => useRoutes(routes);

export default Router;
