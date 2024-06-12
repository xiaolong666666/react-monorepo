import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useObserver } from "@/utils/hooks";

type Props = {
	onChange: (v: boolean) => void;
};

const tabs = [
	{ path: "/follow", title: "关注" },
	{ path: "", title: "推荐" },
	{ path: "/hot", title: "热榜" },
	{ path: "/zvideo", title: "视频" },
];

export const PureTabs = () =>
	tabs.map(({ path, title }) => (
		<NavLink
			key={path}
			to={path}
			className={({ isActive }) =>
				`whitespace-nowrap px-6 py-3.5 text-base transition-all ${isActive ? "text-blue-600 font-bold" : "text-black hover:text-blue-900"}`
			}
		>
			{title}
		</NavLink>
	));

const Tabs = ({ onChange }: Props) => {
	const tabsRef = useRef<HTMLDivElement>(null);

	useObserver((flag) => {
		onChange(flag);
	}, tabsRef);

	return (
		<div className="w-full">
			<div ref={tabsRef} />
			<div className="flex">
				<PureTabs />
			</div>
		</div>
	);
};

export default Tabs;
