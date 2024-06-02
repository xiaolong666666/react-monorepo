import React from "react";
import Card from "../../../components/card";

type Props = {};

type usual = {
	icon: React.ReactNode;
	text: string;
	num?: number | undefined;
	link: string;
};

const MyUsual = (props: Props) => {
	const usualList: Array<usual> = [
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--Star GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 0 0 .165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 0 0-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 0 0-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 0 0-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 0 0 .164-.12l2.378-4.122Z"></path>
				</svg>
			),
			text: "我的收藏",
			num: 0,
			link: "https://www.zhihu.com/collections/mine",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--HelpBubble GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.088 1.968c.323-.044.72-.044 1.153-.044h11.518c.433 0 .83 0 1.152.044.356.047.732.16 1.04.469.31.309.422.685.47 1.04.043.323.043.72.043 1.153v13.232c0 .433 0 .83-.043 1.152-.048.356-.16.732-.47 1.04-.308.31-.684.422-1.04.47-.322.043-.72.043-1.152.043h-3.796l-3.932 2.857c-.115.084-.26.19-.397.26-.158.083-.467.207-.827.071-.359-.135-.509-.432-.573-.6-.055-.143-.094-.318-.125-.458l-.477-2.13H6.24c-.433 0-.83 0-1.153-.043-.355-.048-.73-.16-1.04-.47-.309-.308-.421-.684-.47-1.04-.042-.322-.042-.72-.042-1.152V4.63c0-.433 0-.83.043-1.153.048-.355.16-.731.47-1.04.308-.31.684-.422 1.04-.47Zm5.827 8.93c0-.095 0-.142.029-.171.03-.03.076-.03.17-.03h1.01a1.63 1.63 0 0 0 1.5-1.629 1.63 1.63 0 0 0-1.626-1.634c-.832 0-1.531.655-1.616 1.469-.011.102-.016.153-.045.178-.028.026-.075.026-.168.026H8.947c-.095 0-.142 0-.172-.031s-.027-.077-.022-.168C8.847 7.201 10.27 5.8 11.998 5.8a3.26 3.26 0 0 1 3.25 3.268 3.264 3.264 0 0 1-2.7 3.222c-.041.007-.062.01-.074.024-.012.014-.012.035-.012.076v.797c0 .094 0 .141-.029.17-.03.03-.076.03-.17.03h-1.148c-.095 0-.142 0-.171-.03-.03-.029-.03-.076-.03-.17v-2.29Zm-.31 4.05c0-.094 0-.141.03-.17.029-.03.076-.03.17-.03h1.922c.094 0 .141 0 .17.03.03.029.03.076.03.17v1.402c0 .094 0 .141-.03.17-.029.03-.076.03-.17.03h-1.922c-.094 0-.141 0-.17-.03-.03-.029-.03-.076-.03-.17v-1.402Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "我关注的问题",
			num: 1,
			link: "https://www.zhihu.com/people/xiao-long-58-54/following/questions",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--Invite GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.5 7.5A5.5 5.5 0 0 1 11 2a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 11 13a5.5 5.5 0 0 1-5.5-5.5Zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 0 0-.545-.509 1.37 1.37 0 0 0-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 0 0 .955-.929c.06-1.767.7-2.96 1.456-3.723Zm5.596-2.292a.706.706 0 0 0-1.412 0v2.588h-2.588a.706.706 0 0 0 0 1.412h2.588v2.588a.706.706 0 1 0 1.412 0v-2.588h2.588a.706.706 0 0 0 0-1.412h-2.588v-2.588Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "我的邀请",
			link: "https://www.zhihu.com/creator/featured-question/invited",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--Balance GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M21.75 6v12.248c0 1.106-.788 2.002-1.76 2.002H4.01c-.972 0-1.76-.896-1.76-2.002V5.752c0-1.106.788-2.002 1.76-2.002h15.982c.971.001 1.758 1.145 1.758 2.25ZM6 8.75a.75.75 0 0 0 0 1.5h2.483c1.353 2.991 5.681 2.991 7.034 0H18a.75.75 0 0 0 0-1.5h-2.887c-.39 0-.737.25-.86.62-.722 2.165-3.784 2.165-4.506 0a.906.906 0 0 0-.86-.62H6Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "我的余额",
			link: "https://www.zhihu.com/balance",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--Coupon GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M2 6.13c0-1.038.808-1.88 1.805-1.88h16.39c.997 0 1.805.842 1.805 1.88v2.588a.45.45 0 0 1-.34.42c-.877.248-2.16 1.049-2.16 2.862 0 1.813 1.283 2.614 2.16 2.862a.45.45 0 0 1 .34.42v2.587c0 1.039-.808 1.881-1.805 1.881H3.803C2.807 19.749 2 18.907 2 17.87v-2.535c0-.221.18-.399.397-.439.875-.163 2.103-.88 2.103-2.896 0-2.015-1.228-2.733-2.103-2.896C2.18 9.064 2 8.886 2 8.665V6.131Zm7 5.12a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "我的礼券",
			link: "https://www.zhihu.com/coupon",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="ZDI ZDI--ExclamationTriangleFill24 GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M13.61 4.059c-.715-1.24-2.505-1.24-3.221 0L2.253 18.15c-.716 1.24.18 2.79 1.611 2.79h16.272c1.431 0 2.326-1.55 1.61-2.79L13.611 4.06Zm-2.36 9.416a.75.75 0 1 0 1.5 0V9.976a.75.75 0 1 0-1.5 0v3.5ZM11 16.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "我的举报",
			link: "https://www.zhihu.com/community?source=zhihu_default",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="ZDI ZDI--TextPencilFill24 GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path d="M4.75 3.5a1.25 1.25 0 1 0 0 2.5h14.5a1.25 1.25 0 1 0 0-2.5H4.75ZM4.75 11a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5h-7.5ZM3.5 19.25c0-.69.56-1.25 1.25-1.25h4.5a1.25 1.25 0 1 1 0 2.5h-4.5c-.69 0-1.25-.56-1.25-1.25ZM20.683 10.979a1.252 1.252 0 0 0-.685-1.631 1.248 1.248 0 0 0-1.633.674l-2.63 6.393a1.252 1.252 0 0 0 .686 1.63 1.248 1.248 0 0 0 1.633-.673l2.63-6.393ZM16.879 20.36a1.252 1.252 0 0 0-.71-1.62 1.248 1.248 0 0 0-1.623.698l-.236.601c-.252.64.066 1.366.71 1.62a1.248 1.248 0 0 0 1.622-.698l.237-.601Z"></path>
				</svg>
			),
			text: "违规诊断",
			link: "https://www.zhihu.com/community/reported",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 16 16"
					className="ZDI ZDI--HeadMicrophoneFill16 GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M8 2.763a4.376 4.376 0 0 0-4.33 3.744h.065c.861 0 1.559.697 1.559 1.558v2.595c0 .861-.698 1.559-1.559 1.559A2.485 2.485 0 0 1 1.25 9.733v-.741c0-.867.444-1.63 1.117-2.075a5.638 5.638 0 0 1 11.266 0 2.483 2.483 0 0 1 1.117 2.075v.741c0 1.19-.836 2.184-1.952 2.428a5.077 5.077 0 0 1-4.242 2.283H8a.631.631 0 0 1 0-1.263h.556c1.116 0 2.12-.478 2.818-1.241a1.557 1.557 0 0 1-.668-1.28V8.065a1.558 1.558 0 0 1 1.624-1.558A4.376 4.376 0 0 0 8 2.763Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "帮助与客服",
			link: "https://www.zhihu.com/help-center",
		},
		{
			icon: (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="Zi Zi--Copyright GlobalSideBar-navIcon"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.114-4.957a4.59 4.59 0 0 0-3.292.816 5 5 0 0 0-1.937 2.868 5.227 5.227 0 0 0 .333 3.483 4.865 4.865 0 0 0 2.453 2.41 4.557 4.557 0 0 0 3.384.104 4.827 4.827 0 0 0 2.583-2.26.75.75 0 0 0-1.32-.712 3.327 3.327 0 0 1-1.777 1.562c-.74.27-1.547.245-2.273-.07a3.366 3.366 0 0 1-1.692-1.672 3.727 3.727 0 0 1-.236-2.48 3.5 3.5 0 0 1 1.35-2.01 3.09 3.09 0 0 1 2.219-.553c.774.107 1.495.51 2.022 1.146a.75.75 0 0 0 1.155-.958 4.703 4.703 0 0 0-2.972-1.674Z"
						clipRule="evenodd"
					></path>
				</svg>
			),
			text: "版权服务中心",
			link: "https://www.zhihu.com/copyright",
		},
	];
	return (
		<Card>
			<ul>
				{usualList.map((usual) => (
					<li key={usual.text} className="flex">
						<a
							href={usual.link}
							className="w-full h-10 flex justify-between items-center px-5 text-slate-400 text-sm"
						>
							<div>{usual.icon}</div>
							<div className="flex-1 mx-2.5">{usual.text}</div>
							{usual.num !== undefined && (
								<div className="px-2.5 py-1 rounded-sm bg-slate-50 text-xs line">
									{usual.num}
								</div>
							)}
						</a>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default MyUsual;
