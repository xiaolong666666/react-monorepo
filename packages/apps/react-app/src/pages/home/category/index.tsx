import React from "react";
import Card from "../../../components/card";

type Props = {};

type category = {
	icon: React.ReactNode;
	iconColor: string;
	text: string;
	link: string;
};

const Category = (props: Props) => {
	const categoryList: category[] = [
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Live"
					fill="currentColor"
				>
					<path d="m13.693 10.354 1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376Z"></path>
				</svg>
			),
			iconColor: "rgb(255, 207, 0)",
			text: "Live",
			link: "https://www.zhihu.com/lives",
		},
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Ebook"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M16 17.649V2.931a.92.92 0 0 0-.044-.283.943.943 0 0 0-1.183-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.935.935 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886Z"
						clip-Rule="evenodd"
					></path>
				</svg>
			),
			iconColor: "rgb(67, 212, 128)",
			text: "书店",
			link: "https://www.zhihu.com/pub/",
		},
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Org"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M6.326 6.58a4.007 4.007 0 0 1 7.456-2.405c.106.182.2.367.284.553a4.007 4.007 0 0 1 5.716 5.322l-.012.021a4.006 4.006 0 0 1-1.877 7.547c-.091 0-.182-.002-.272-.006a4.008 4.008 0 0 1-7.59 1.984A4.008 4.008 0 0 1 4.39 14.09a4.008 4.008 0 0 1 1.937-7.51Zm1.888.428a2.257 2.257 0 0 1 4.053-1.958c.666 1.154.75 2.465.49 3.601-.203.893-.591 1.573-.967 1.965a6.99 6.99 0 0 0-.495-.94c-.676-1.075-1.712-2.085-3.08-2.668Zm7.595 10.259a7.024 7.024 0 0 1-3.649-2.925c-.693 1.051-1.125 2.545-.72 4.052a2.256 2.256 0 0 0 4.369-1.127Zm-2.193-3.9c.21.365.513.755.912 1.126.854.792 2.032 1.375 3.365 1.375a2.256 2.256 0 0 0 .756-4.383 6.985 6.985 0 0 1-2.74 1.588 6.547 6.547 0 0 1-2.293.294Zm.848-4.327c.173-.76.233-1.598.126-2.451a2.257 2.257 0 0 1 3.677 2.586c-.667 1.154-1.76 1.882-2.874 2.225-.833.257-1.581.273-2.106.162.55-.676.961-1.577 1.177-2.522ZM9.55 17.681c-.12-1.6.373-3.107 1.125-4.262a5.037 5.037 0 0 0-1.204-.095c-1.164.044-2.41.464-3.352 1.407a2.256 2.256 0 0 0 3.19 3.19l.241-.24Zm.263-7.074c.213.34.373.676.486.992a7.02 7.02 0 0 0-.894-.023c-1.2.044-2.51.397-3.654 1.19a2.256 2.256 0 0 1 1.168-4.358c1.287.345 2.274 1.213 2.894 2.2Z"
						clip-Rule="evenodd"
					></path>
				</svg>
			),
			iconColor: "rgb(0, 102, 255)",
			text: "圆桌",
			link: "https://www.zhihu.com/roundtable",
		},
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Edit"
					fill="currentColor"
				>
					<path d="m7.841 20.043-4.328 1.18a.6.6 0 0 1-.737-.736l1.18-4.324a1.2 1.2 0 0 1 .314-.539l8.094-7.995a.9.9 0 0 1 1.268.003l2.736 2.736a.9.9 0 0 1 .004 1.268l-7.196 7.296-.802.802a1.2 1.2 0 0 1-.533.31ZM19.703 4.81l-.514-.513a2.542 2.542 0 0 0-3.595 0l-.999 1.067a.9.9 0 0 0 .02 1.252l2.77 2.768a.9.9 0 0 0 1.25.02l1.068-.999a2.542 2.542 0 0 0 0-3.594Z"></path>
				</svg>
			),
			iconColor: "rgb(15, 136, 235)",
			text: "专栏",
			link: "https://zhuanlan.zhihu.com",
		},
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--Infinity"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M2 5.4A2.4 2.4 0 0 1 4.4 3h15.2A2.4 2.4 0 0 1 22 5.4v10.5a2.4 2.4 0 0 1-2.4 2.4h-2.208l-.24 2.878a.8.8 0 0 1-1.387.475L12.692 18.3H4.4A2.4 2.4 0 0 1 2 15.9V5.4Zm8.758 1.849a.75.75 0 0 0-1.115 1.003l1.607 1.786v.462h-1.5a.75.75 0 0 0 0 1.5h1.5v1.75a.75.75 0 0 0 1.5 0V12h1.5a.75.75 0 0 0 0-1.5h-1.5v-.462l1.607-1.786a.75.75 0 0 0-1.115-1.003L12 8.629l-1.242-1.38Z"
						clip-Rule="evenodd"
					></path>
				</svg>
			),
			iconColor: "rgb(84, 120, 240)",
			text: "付费咨询",
			link: "https://www.zhihu.com/consult",
		},
		{
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="Zi Zi--KnowledgeBase"
					fill="currentColor"
				>
					<path d="M21 9.749v9.91c0 .74-.604 1.341-1.35 1.341H4.35C3.604 21 3 20.4 3 19.659V9.319c0-.503.283-.963.733-1.193l4.892-2.5V3.341c0-.74.604-1.341 1.35-1.341.267 0 .527.078.749.225l9.675 6.408c.375.249.601.668.601 1.116ZM8.297 8.307 5.372 9.802A.223.223 0 0 0 5.25 10v8.54c0 .124.1.224.225.224h8.586a.223.223 0 0 0 .124-.41l-4.959-3.259a1.339 1.339 0 0 1-.601-1.116V8.506a.224.224 0 0 0-.328-.199Z"></path>
				</svg>
			),
			iconColor: "rgb(88, 104, 209)",
			text: "百科",
			link: "https://www.zhihu.com/wiki",
		},
	];
	return (
		<Card>
			<ul className="flex flex-wrap mt-5 px-2.5">
				{categoryList.map((category) => (
					<li
						key={category.text}
						className="flex w-1/3 justify-center items-center mb-6"
					>
						<a
							href={category.link}
							className="flex flex-col items-center"
							style={{ color: category.iconColor }}
						>
							<div className="mb-2.5">{category.icon}</div>
							<span className="text-slate-400 hover:text-current">
								{category.text}
							</span>
						</a>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Category;
