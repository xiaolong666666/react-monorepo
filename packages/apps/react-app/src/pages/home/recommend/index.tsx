import React, { FC, MouseEventHandler, useRef, useState } from "react";
import { useInfiniteLoad } from "../../../utils/hooks";

type Props = {};

type ItemProps = {
	info: Record<string, any>;
};

const RecommendItem: FC<ItemProps> = ({ info }) => {
	const [selected, setSelected] = useState<boolean>(false);
	const href = `https://www.zhihu.com/question/${info?.target?.question?.id}/answer/${info?.target?.id}`;
	const operateList = [
		{
			icon: (
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="Zi Zi--Comment Button-zi t2ntD6J1DemdOdvh5FB4"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M12 2.75a9.25 9.25 0 1 0 4.737 17.197l2.643.817a1 1 0 0 0 1.25-1.25l-.8-2.588A9.25 9.25 0 0 0 12 2.75Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "评论",
		},
		{
			icon: (
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="Zi Zi--Share Button-zi t2ntD6J1DemdOdvh5FB4"
					fill="currentColor"
				>
					<path d="M19.47 1.914a.8.8 0 0 1 1.204.778l-1.872 16.386a.9.9 0 0 1-1.204.743l-4.615-1.692a.7.7 0 0 0-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 0 1 .179-.504l5.808-7.148a.595.595 0 0 0-.897-.781l-5.93 6.354a1.1 1.1 0 0 1-1.258.252L2.57 13.46a.8.8 0 0 1-.08-1.415l16.98-10.13Z"></path>
				</svg>
			),
			text: "分享",
		},
		{
			icon: (
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="Zi Zi--Star Button-zi t2ntD6J1DemdOdvh5FB4"
					fill="currentColor"
				>
					<path d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 0 0 .165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 0 0-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 0 0-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 0 0-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 0 0 .164-.12l2.378-4.122Z"></path>
				</svg>
			),
			text: "收藏",
		},
		{
			icon: (
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="Zi Zi--Heart Button-zi t2ntD6J1DemdOdvh5FB4"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M12.004 4.934c1.015-.944 2.484-1.618 3.98-1.618 3.48 0 6.53 3.265 6.15 7.614-.11 1.254-.686 2.55-1.458 3.753-.778 1.215-1.79 2.392-2.845 3.419-1.054 1.028-2.168 1.923-3.161 2.566a9.96 9.96 0 0 1-1.41.777c-.418.182-.862.32-1.268.32s-.848-.137-1.267-.317a9.918 9.918 0 0 1-1.407-.771c-.992-.64-2.103-1.53-3.156-2.555-1.052-1.024-2.062-2.2-2.84-3.417-.77-1.208-1.346-2.51-1.456-3.775-.38-4.349 2.67-7.614 6.15-7.614 1.484 0 2.983.673 3.988 1.618Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "喜欢",
		},
		{
			icon: (
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="Zi Zi--Dots Button-zi t2ntD6J1DemdOdvh5FB4"
					fill="currentColor"
				>
					<path d="M6 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path>
				</svg>
			),
			text: "",
		},
	];

	const onHandleClick: MouseEventHandler = (e) => {
		e.preventDefault();
		setSelected((v) => !v);
	};

	return (
		<div key={info.id} className="flex flex-col items-start p-5 border-t">
			<div className="flex justify-start h-auto">
				<a
					href={href}
					target="_blank"
					className="font-bold text-black text-lg"
				>
					{info?.target?.question?.title}
				</a>
			</div>
			<div>
				{selected ? (
					<div
						dangerouslySetInnerHTML={{
							__html: info?.target?.content,
						}}
					/>
				) : (
					<a
						href="/"
						onClick={onHandleClick}
						className="cursor-pointer text-sm text-slate-800 hover:text-slate-500"
					>
						{info?.target?.new_excerpt ?? info?.target?.excerpt}
						<div className="inline-flex items-center text-sm leading-7 text-blue-700 hover:text-slate-500">
							阅读全文
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="Zi Zi--ArrowDown ContentItem-arrowIcon"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M17.776 10.517a.875.875 0 0 1-.248 1.212l-5.05 3.335a.875.875 0 0 1-.964 0L6.47 11.73a.875.875 0 1 1 .965-1.46l4.56 3.015 4.568-3.016a.875.875 0 0 1 1.212.248Z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					</a>
				)}
			</div>
			<div
				className={`flex w-full box-content gap-6 -mx-5 -mb-5 px-5 py-2.5 bg-white ${selected ? "sticky bottom-0 border-t shadow-sm" : ""}`}
			>
				<div className="flex gap-1">
					<div className="flex gap-1 h-7 items-center px-3 bg-blue-100 rounded-sm text-blue-500">
						<svg
							width="10"
							height="10"
							viewBox="0 0 24 24"
							className="Zi Zi--TriangleUp VoteButton-TriangleUp"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023Z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="text-sm">赞同</span>
					</div>
					<div className="flex gap-1 h-7 items-center px-3 bg-blue-100 rounded-sm text-blue-500">
						<svg
							width="10"
							height="10"
							viewBox="0 0 24 24"
							className="Zi Zi--TriangleDown"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M13.792 20.319c-.781 1.406-2.803 1.406-3.584 0L2.418 6.296c-.76-1.367.228-3.046 1.791-3.046h15.582c1.563 0 2.55 1.68 1.791 3.046l-7.79 14.023Z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				</div>
				{operateList.map((operate) => (
					<div
						key={operate.text}
						className="flex gap-1 items-center text-slate-400 text-sm"
					>
						{operate.icon}
						{operate.text}
					</div>
				))}
				{selected && (
					<div
						onClick={onHandleClick}
						className="flex flex-1 justify-end items-center text-sm text-slate-400 cursor-pointer"
					>
						收起
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="Zi Zi--ArrowDown ContentItem-arrowIcon rotate-180"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M17.776 10.517a.875.875 0 0 1-.248 1.212l-5.05 3.335a.875.875 0 0 1-.964 0L6.47 11.73a.875.875 0 1 1 .965-1.46l4.56 3.015 4.568-3.016a.875.875 0 0 1 1.212.248Z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};

const Recommend = (props: Props) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const list = useInfiniteLoad({
		url: "/feed",
		pageSize: 6,
		ref: scrollRef,
	});

	return (
		<div className="flex flex-col border-t">
			{list.map((item) => (
				<RecommendItem key={item.id} info={item} />
			))}
			<div
				ref={scrollRef}
				className="flex justify-center items-center h-14 border-t text-slate-500"
			>
				Loading...
			</div>
		</div>
	);
};

export default Recommend;
