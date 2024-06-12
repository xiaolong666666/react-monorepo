import React, { useEffect, useState } from "react";
import { Card } from "@xl/xl-react-design";

type Props = {};

const CreativeCenter = (props: Props) => {
	const [idx, setIdx] = useState<number>(0);

	useEffect(() => {
		let timer: number;
		const interval = () => {
			timer = setTimeout(() => {
				setIdx((pre: number) => pre + 1);
				interval();
			}, 2000);
		};
		interval();
		return () => {
			clearTimeout(timer);
		};
	}, []);

	const creationCategoryList = [
		{
			icon: (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					className="GlobalWriteV2-navIcon"
					fill="currentColor"
				>
					<g fill="#06F" fillRule="evenodd">
						<circle cx="20" cy="20" r="20" opacity=".12"></circle>
						<path
							fillRule="nonzero"
							d="M23.487 10.463c1.896 0 2.583.193 3.277.555a3.824 3.824 0 0 1 1.607 1.573c.371.678.569 1.35.569 3.206v8.472c0 1.855-.198 2.527-.569 3.205a3.824 3.824 0 0 1-1.607 1.573c-.694.363-1.381.556-3.277.556h-6.96c-1.895 0-2.583-.193-3.276-.556a3.824 3.824 0 0 1-1.608-1.573c-.37-.678-.568-1.35-.568-3.205v-8.472c0-1.855.197-2.528.568-3.206.37-.678.915-1.21 1.608-1.573.693-.362 1.38-.556 3.277-.556h6.959Zm0 2.08h-6.96c-1.407 0-1.836.081-2.273.31a1.72 1.72 0 0 0-.735.72c-.234.427-.317.847-.317 2.224v8.472c0 1.377.083 1.796.317 2.224.172.316.412.551.735.72.437.229.866.31 2.274.31h6.959c1.407 0 1.836-.081 2.274-.31a1.72 1.72 0 0 0 .735-.72c.234-.428.317-.847.317-2.224v-8.472c0-1.377-.083-1.797-.317-2.225a1.72 1.72 0 0 0-.735-.72c-.438-.228-.867-.309-2.274-.309Zm-1.991 9.778v1.873h-5.955V22.32h5.955Zm2.977-3.328v1.872h-8.932v-1.872h8.932Zm0-3.33v1.873h-8.932v-1.872h8.932Z"
						></path>
					</g>
				</svg>
			),
			text: "回答问题",
			tip: "回答",
		},
		{
			icon: (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					className="GlobalWriteV2-navIcon"
					fill="none"
				>
					<circle
						cx="20"
						cy="20"
						r="20"
						fill="#FF9607"
						opacity=".12"
					></circle>
					<path
						stroke="#FF9607"
						strokeWidth="1.87"
						d="m26.842 16.8 2.674-1.48a1 1 0 0 1 1.484.876v7.281a1 1 0 0 1-1.397.918l-2.76-1.195m0-6.4v-1.6a3.2 3.2 0 0 0-3.2-3.2H13.2a3.2 3.2 0 0 0-3.2 3.2v9.6a3.2 3.2 0 0 0 3.2 3.2h10.442a3.2 3.2 0 0 0 3.2-3.2v-1.6m0-6.4v6.4"
					></path>
					<path
						stroke="#FF9607"
						strokeWidth="1.87"
						d="M21.133 19.424a.665.665 0 0 1 0 1.152L16.933 23a.665.665 0 0 1-.998-.576v-4.85c0-.512.554-.832.998-.576l4.2 2.425Z"
					></path>
				</svg>
			),
			text: "发视频",
		},
		{
			icon: (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					className="GlobalWriteV2-navIcon"
					fill="currentColor"
				>
					<g fill="none" fillRule="evenodd">
						<circle
							cx="20"
							cy="20"
							r="20"
							fill="#F4C807"
							opacity=".12"
						></circle>
						<path d="M6 6h28v28H6z"></path>
						<path
							fill="#F4C807"
							fillRule="nonzero"
							d="m20.406 11.772-2.172 2.176h-2.29c-1.438 0-1.875.085-2.322.324-.33.176-.575.422-.751.752-.24.448-.324.886-.324 2.326v7.12c0 1.44.085 1.878.324 2.326.176.33.421.576.75.752.421.225.834.314 2.08.323l7.35.001c1.438 0 1.876-.084 2.323-.324.33-.176.575-.422.751-.752.24-.448.324-.886.324-2.326v-4.905l2.172-2.175v7.08c0 1.94-.202 2.643-.58 3.352a3.95 3.95 0 0 1-1.643 1.645c-.708.379-1.41.58-3.346.58h-7.108c-1.936 0-2.639-.201-3.347-.58a3.95 3.95 0 0 1-1.642-1.645c-.378-.71-.58-1.413-.58-3.352v-7.12c0-1.94.202-2.643.58-3.352a3.95 3.95 0 0 1 1.642-1.645c.708-.379 1.41-.58 3.347-.58h4.462Zm6.908-2.053c.384.116.747.338 1.168.759l.188.189c.42.421.642.785.758 1.17a1.98 1.98 0 0 1 0 1.163c-.116.385-.337.749-.758 1.17l-6.9 6.911c-.62.622-.827.81-1.078 1.004-.251.193-.496.34-.784.47-.288.131-.553.226-1.392.48l-1.088.332a1.303 1.303 0 0 1-1.625-1.629l.33-1.09c.255-.84.35-1.104.48-1.393.13-.29.277-.534.47-.785.193-.252.381-.46 1.001-1.081l6.9-6.911c.42-.421.784-.643 1.168-.76a1.97 1.97 0 0 1 1.162 0Zm-3.204 4.096-4.797 4.805c-.547.548-.709.723-.852.91-.112.146-.19.276-.265.443-.097.214-.175.44-.4 1.182l-.094.31.31-.095c.74-.225.965-.303 1.179-.4.167-.076.297-.154.442-.266.187-.143.361-.305.909-.853l4.797-4.805-1.23-1.23Zm2.546-2.43c-.109.033-.23.11-.443.324l-.874.875 1.228 1.231.875-.876c.213-.213.29-.334.323-.444a.24.24 0 0 0 0-.153c-.033-.11-.11-.23-.323-.445l-.189-.188c-.213-.214-.334-.291-.443-.325a.238.238 0 0 0-.154 0Z"
						></path>
					</g>
				</svg>
			),
			text: "写文章",
			tip: "写文章",
		},
		{
			icon: (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					className="GlobalWriteV2-navIcon"
					fill="currentColor"
				>
					<g fill="#26BFBF" fillRule="evenodd">
						<circle cx="20" cy="20" r="20" opacity=".12"></circle>
						<path
							fillRule="nonzero"
							d="M21.987 11.686v2.169h-6.125c-1.43 0-1.863.064-2.297.306-.332.128-.574.383-.74.702-.255.447-.332.893-.332 2.297v7.018c0 1.442.09 1.876.332 2.297.166.345.408.587.74.766.434.23.868.319 2.297.319h7.018c1.43 0 1.863-.077 2.297-.32.345-.165.587-.408.766-.74.216-.408.296-.816.305-2.054l.001-6.316.025.025h2.17v6.074c0 1.914-.217 2.616-.587 3.318a3.92 3.92 0 0 1-1.634 1.62c-.689.383-1.403.575-3.317.575h-7.018c-1.915 0-2.616-.204-3.318-.575a3.891 3.891 0 0 1-1.62-1.62c-.384-.702-.575-1.404-.575-3.318v-7.018c0-1.914.204-2.629.574-3.318a3.996 3.996 0 0 1 1.62-1.633c.703-.383 1.404-.574 3.318-.574h6.1Zm1.889 6.954c1.059 1.06 1.059 2.807 0 3.88l-.039.038a2.719 2.719 0 0 1-3.879 0l-2.45-2.553a.801.801 0 0 0-1.123 0l-.05.052c-.32.357-.32.893 0 1.212a.75.75 0 0 0 .726.217c.51-.128 1.047.23 1.149.74a.946.946 0 0 1-.727 1.148 2.649 2.649 0 0 1-2.527-.74 2.796 2.796 0 0 1 0-3.905l.038-.025c1.098-1.085 2.808-1.085 3.892 0l2.463 2.488a.764.764 0 0 0 1.11 0l.038-.025a.855.855 0 0 0 0-1.187.876.876 0 0 0-.74-.217c-.51.128-1.02-.204-1.148-.727-.128-.51.204-1.021.727-1.149l.013-.013a2.703 2.703 0 0 1 2.527.766Zm4.338-9.315v2.578h2.578v1.722h-2.578v2.59h-1.723v-2.602h-2.59v-1.71h2.59V9.325h1.723Z"
						></path>
					</g>
				</svg>
			),
			text: "写想法",
		},
	];
	return (
		<Card className="px-3.5">
			<header className="flex h-13 items-center">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Creator CreatorEntrance-creatorIcon scale-75"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M6.5 7.5A5.5 5.5 0 0 1 12 2a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 12 13a5.5 5.5 0 0 1-5.5-5.5Zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 0 0-.545-.509 1.37 1.37 0 0 0-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 0 0 .955-.929c.06-1.767.7-2.96 1.456-3.723Zm6.504-1.568a.75.75 0 1 0-1.228-.86l-2.903 4.146a.75.75 0 0 0 1.229.86l2.902-4.146Zm-4.227 6.099a.75.75 0 1 0-1.241-.842l-.267.392a.75.75 0 0 0 1.242.842l.266-.392Z"
						clipRule="evenodd"
					></path>
				</svg>
				<div className="flex flex-1 gap-1 ml-1 text-sm text-black font-extrabold">
					创作中心
					<div className="px-1 py-0.5 rounded-sm bg-blue-100 text-blue-500 text-xs font-medium">
						Lv1
					</div>
				</div>
				<a
					target="_blank"
					href="/creator/manage/creation/draft?type=answer"
				>
					<div className="text-xs text-slate-400">
						草稿箱<span className="text-slate-600">(0)</span>
					</div>
				</a>
			</header>
			<main className="flex justify-between pt-2 pb-5">
				{creationCategoryList.map((category) => (
					<button
						key={category.text}
						title={category.tip}
						className="flex flex-col gap-3 items-center hover:text-blue-500"
						onMouseEnter={(e) => {
							e.preventDefault();
							e.stopPropagation();
							e.target?.children?.[0]?.children?.[0]?.children?.[0]?.setAttribute(
								"opacity",
								0.32,
							);
						}}
						onMouseLeave={(e) => {
							e.preventDefault();
							e.stopPropagation();
							e.target?.children?.[0]?.children?.[0]?.children?.[0]?.setAttribute(
								"opacity",
								0.12,
							);
						}}
					>
						{category.icon}
						<div className="text-xs text-slate-950">
							{category.text}
						</div>
					</button>
				))}
			</main>
			<div className="mb-4 p-3.5 rounded-sm bg-slate-50 overflow-hidden">
				<div className="overflow-hidden">
					<div
						className="relative h-14 transition-all duration-500"
						style={{ top: (idx % 2) * -56 }}
					>
						<div className="flex justify-between">
							<div className="flex flex-col justify-center items-center">
								<div className="flex gap-0.5 items-center text-xs text-slate-400">
									进入阅读(播放)数
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										className="Zi Zi--Help css-ekv74b"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.396 8.493c-.232.403-.246.855-.246.977a.75.75 0 0 1-1.5 0c0-.191.012-.973.448-1.728.473-.819 1.382-1.492 2.926-1.492 1.58 0 2.583.787 3.055 1.807.438.949.406 2.077.034 2.84-.212.434-.543.728-.85.942-.217.152-.471.293-.68.409a14.53 14.53 0 0 0-.182.102c-.533.307-.634.46-.634.695a.75.75 0 0 1-1.5 0c0-1.145.842-1.682 1.386-1.995l.263-.148a5.56 5.56 0 0 0 .49-.294c.198-.138.303-.255.36-.37.163-.335.21-.99-.049-1.551-.226-.49-.698-.937-1.693-.937-1.03 0-1.433.406-1.628.743Zm2.678 7.706a1.05 1.05 0 1 1-2.1.001 1.05 1.05 0 0 1 2.1-.001Z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<div className="text-slate-600">0</div>
								<div className="text-xs text-slate-400">
									昨日数据{" "}
									<span className="text-slate-600">0</span>
								</div>
							</div>
							<div className="h-ful border-r border-dashed" />
							<div className="flex flex-col justify-center items-center">
								<div className="flex gap-0.5 items-center text-xs text-slate-400">
									今日新增赞同数
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										className="Zi Zi--Help css-ekv74b"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.396 8.493c-.232.403-.246.855-.246.977a.75.75 0 0 1-1.5 0c0-.191.012-.973.448-1.728.473-.819 1.382-1.492 2.926-1.492 1.58 0 2.583.787 3.055 1.807.438.949.406 2.077.034 2.84-.212.434-.543.728-.85.942-.217.152-.471.293-.68.409a14.53 14.53 0 0 0-.182.102c-.533.307-.634.46-.634.695a.75.75 0 0 1-1.5 0c0-1.145.842-1.682 1.386-1.995l.263-.148a5.56 5.56 0 0 0 .49-.294c.198-.138.303-.255.36-.37.163-.335.21-.99-.049-1.551-.226-.49-.698-.937-1.693-.937-1.03 0-1.433.406-1.628.743Zm2.678 7.706a1.05 1.05 0 1 1-2.1.001 1.05 1.05 0 0 1 2.1-.001Z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<div className="text-slate-600">0</div>
								<div className="text-xs text-slate-400">
									昨日数据{" "}
									<span className="text-slate-600">0</span>
								</div>
							</div>
						</div>
						<div className="flex justify-between gap-2 h-14 overflow-hidden">
							<div className="flex flex-col flex-1 justify-start">
								<div
									className="text-sm text-slate-950 overflow-hidden whitespace-normal text-ellipsis"
									style={{
										display: "-webkit-box",
										WebkitLineClamp: "2",
										WebkitBoxOrient: "vertical",
									}}
								>
									《创作者》独家分享第二课：内容创作有哪些好用的技巧呢？
								</div>
								<div className="text-sm text-slate-400">
									525,747 次播放
								</div>
							</div>
							<div className="flex w-14 justify-center items-center rounded-md bg-slate-200">
								视频帧
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => window.open("https://www.zhihu.com/creator")}
				className="flex h-9 justify-center items-center mb-4 border border-blue-400 rounded text-blue-500 text-sm cursor-pointer"
			>
				进入创作中心
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					className="Zi Zi--ArrowRight css-l8s9e4"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10.518 6.224a.875.875 0 0 1 1.212.248l3.335 5.05a.875.875 0 0 1 0 .964l-3.334 5.043a.875.875 0 0 1-1.46-.965l3.015-4.56-3.016-4.568a.875.875 0 0 1 .248-1.212Z"
						clipRule="evenodd"
					></path>
				</svg>
			</div>
		</Card>
	);
};

export default CreativeCenter;
