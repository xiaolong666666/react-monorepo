import React, { useEffect, useMemo, useState } from "react";
import { get } from "@/utils/api/request";
import Card from "../../../components/card";

type Props = {};

const RecommendFollow = (props: Props) => {
	const [list, setList] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	console.log(list);

	useEffect(() => {
		get("/recommend_follow_people", { rec_type: "PC_HOME_FEED" }).then(
			(res) => setList(res.list),
		);
	}, []);

	const onPrev = () => setPageNumber((pre) => (pre === 0 ? 2 : pre - 1));

	const onNext = () => setPageNumber((pre) => (pre === 2 ? 0 : pre + 1));

	return (
		<Card className="px-3.5">
			<header className="flex h-13 items-center">
				<svg
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
					className="ZDI ZDI--UserPlusFill24 css-1alihcs"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.5 7.5A5.5 5.5 0 0 1 11 2a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 11 13a5.5 5.5 0 0 1-5.5-5.5Zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 0 0-.545-.509 1.37 1.37 0 0 0-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 0 0 .955-.929c.06-1.767.7-2.96 1.456-3.723Zm5.596-2.292a.706.706 0 0 0-1.412 0v2.588h-2.588a.706.706 0 0 0 0 1.412h2.588v2.588a.706.706 0 1 0 1.412 0v-2.588h2.588a.706.706 0 0 0 0-1.412h-2.588v-2.588Z"
						clipRule="evenodd"
					></path>
				</svg>
				<div className="flex flex-1 gap-1 ml-1 text-sm text-black font-extrabold">
					推荐关注
				</div>
			</header>
			<div className="overflow-hidden">
				<main
					className="relative h-48 transition-all duration-700"
					style={{ left: pageNumber * -276 }}
				>
					{[0, 1, 2].map((idx) => (
						<ul
							key={idx}
							className={`w-full absolute top-0`}
							style={{ left: idx * 276 }}
						>
							{list
								.slice(idx * 4, (idx + 1) * 4)
								.map((item: any) => (
									<li
										key={item.actor.id}
										className="flex mb-3"
									>
										<img
											src={item.actor.avatar_url}
											alt=""
											className="w-9 h-9"
										/>
										<div className="flex-1 mx-2 overflow-hidden">
											<div className="text-sm text-slate-600 truncate">
												{item.actor.name}
											</div>
											<div className="text-xs text-slate-400 truncate">
												{item.reason}
											</div>
										</div>
										<div className="flex items-center gap-1.5 text-xs text-blue-500">
											<svg
												width="1.2em"
												height="1.2em"
												viewBox="0 0 24 24"
												className="ZDI ZDI--PlusFill24"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M13.25 3.25a1.25 1.25 0 1 0-2.5 0v7.5h-7.5a1.25 1.25 0 1 0 0 2.5h7.5v7.5a1.25 1.25 0 1 0 2.5 0v-7.5h7.5a1.25 1.25 0 0 0 0-2.5h-7.5v-7.5Z"
													clipRule="evenodd"
												></path>
											</svg>
											关注
										</div>
									</li>
								))}
						</ul>
					))}
				</main>
			</div>

			<footer className="flex justify-center items-center mb-1">
				<button
					disabled={!pageNumber}
					onClick={onPrev}
					className={`flex justify-center items-center w-3.5 h-3.5 border border-slate-300 rounded-full bg-slate-100 ${pageNumber === 0 ? "bg-slate-50" : ""}`}
				>
					<svg
						width="7"
						height="7"
						viewBox="0 0 24 24"
						className="ZDI ZDI--ArrowLeft24 css-etmz4n"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M14.595 3.794a.875.875 0 0 1 .047 1.237L8.192 12l6.452 6.98a.875.875 0 1 1-1.285 1.187l-7.002-7.574a.875.875 0 0 1 0-1.188l7.001-7.564a.875.875 0 0 1 1.236-.048Z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<div className="text-xl scale-50 mx-2">{pageNumber + 1}/3</div>
				<button
					disabled={pageNumber === 2}
					onClick={onNext}
					className={`flex justify-center items-center w-3.5 h-3.5 border border-slate5 rounded-full bg-slate-100 ${pageNumber === 2 ? "bg-slate-50" : ""}`}
				>
					<svg
						width="7"
						height="7"
						viewBox="0 0 24 24"
						className="ZDI ZDI--ArrowRight24 css-etmz4n"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M9.516 3.695a.875.875 0 0 1 1.213.248l5.001 7.575a.875.875 0 0 1 0 .964l-5 7.564a.875.875 0 1 1-1.46-.965L13.95 12 9.268 4.908a.875.875 0 0 1 .248-1.213Z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</footer>
		</Card>
	);
};

export default RecommendFollow;
