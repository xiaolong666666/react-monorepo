import React, { useMemo, useState, useLayoutEffect } from "react";
import { BellIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const MenuAlarm = (props: Props) => {
	const [theme, setTheme] = useState("light");
	const isLight = useMemo(() => theme === "light", [theme]);

	useLayoutEffect(() => {
		const html = document.documentElement;
		html.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<div className="flex gap-6 items-center">
			{isLight ? (
				<svg
					t="1717680369559"
					className="icon :hover cursor-pointer"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="2430"
					width="20"
					height="20"
					onClick={() => setTheme("dark")}
				>
					<path
						d="M501.48 493.55m-233.03 0a233.03 233.03 0 1 0 466.06 0 233.03 233.03 0 1 0-466.06 0Z"
						fill="#F9C626"
						p-id="2431"
					></path>
					<path
						d="M501.52 185.35H478.9c-8.28 0-15-6.72-15-15V87.59c0-8.28 6.72-15 15-15h22.62c8.28 0 15 6.72 15 15v82.76c0 8.28-6.72 15-15 15zM281.37 262.76l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.86-5.86-15.36 0-21.21l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.35 0 21.21zM185.76 478.48v22.62c0 8.28-6.72 15-15 15H88c-8.28 0-15-6.72-15-15v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15zM270.69 698.63l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.36 5.86-21.21 0l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.85-5.86 15.35-5.86 21.21 0zM486.41 794.24h22.62c8.28 0 15 6.72 15 15V892c0 8.28-6.72 15-15 15h-22.62c-8.28 0-15-6.72-15-15v-82.76c0-8.28 6.72-15 15-15zM706.56 709.31l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.36 0 21.21l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.85-5.86-15.35 0-21.21zM802.17 493.59v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15v22.62c0 8.28-6.72 15-15 15h-82.76c-8.28 0-15-6.72-15-15zM717.24 273.44l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.86-5.86 15.36-5.86 21.21 0l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.35 5.86-21.21 0z"
						fill="#F9C626"
						p-id="2432"
					></path>
				</svg>
			) : (
				<svg
					t="1717681017751"
					className="icon :hover cursor-pointer"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="3820"
					width="18"
					height="18"
					onClick={() => setTheme("light")}
				>
					<path
						d="M335.22 240.91c0-57.08 10.68-111.66 30.15-161.87-167.51 64.86-286.3 227.51-286.3 417.92 0 247.42 200.58 448 448 448 190.34 0 352.95-118.71 417.85-286.13-50.16 19.42-104.69 30.08-161.71 30.08-247.41 0-447.99-200.57-447.99-448z"
						fill="#FFD500"
						p-id="3821"
					></path>
				</svg>
			)}
			<div className="flex flex-col justify-center items-center">
				<BellIcon className="h-4 w-4 text-slate-500 fill-slate-500 hover:text-blue-600" />
				<span className="text-slate-400 text-xs">消息</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<ChatBubbleLeftRightIcon className="h-4 w-4 fill-slate-500 hover:text-blue-600" />
				<span className="text-slate-400 text-xs">私信</span>
			</div>
			<img
				src="https://picx.zhimg.com/v2-870c09cd41fc27612e973b1553b40161_l.jpg?source=32738c0c"
				alt="点击打开主页"
				className="w-7 h-7"
			/>
		</div>
	);
};

export default MenuAlarm;
