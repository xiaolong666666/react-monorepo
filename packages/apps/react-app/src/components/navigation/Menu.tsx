import React from "react";
import { routes } from "../../router";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const Menu = (props: Props) => {
	const location = useLocation();
	const getParentPath = () => {
		let path = "";
		routes.forEach((route: any) => {
			(route.children || []).forEach((subRoute: any) => {
				if (
					subRoute.path &&
					location.pathname.includes(subRoute.path)
				) {
					path = route.path;
				}
			});
		});
		return path;
	};
	const parentPath = getParentPath();

	return (
		<ul className="flex h-full ml-6 mr-4">
			{routes.slice(0, 4)?.map(({ path, title }) => (
				<NavLink
					key={path}
					to={path as string}
					className={({ isActive }) =>
						`inline-flex hover:text-black mx-4 h-full py-3 border-b-4 transition-all leading-6 ${isActive || parentPath === path ? "font-extrabold text-black border-blue-600" : "text-slate-500 border-transparent"}`
					}
				>
					{title}
				</NavLink>
			))}
		</ul>
	);
};

export default Menu;
