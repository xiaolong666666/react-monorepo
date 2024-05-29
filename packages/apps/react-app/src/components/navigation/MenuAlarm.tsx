import React from "react";
import { BellIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const MenuAlarm = (props: Props) => {
	return (
		<div className="flex gap-6">
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
