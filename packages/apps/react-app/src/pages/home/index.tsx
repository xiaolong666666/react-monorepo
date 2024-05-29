import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation";
import Card from "../../components/card";
import Tabs from "./tabs";
import CreativeCenter from "./creative-center";
import RecommendFollow from "./recommend-follow";
import Category from "./category";
import MyUsual from "./my-usual";

type Props = {};

const Home = (props: Props) => {
	const [isFirstLevel, setIsFirstLevel] = useState<boolean>(true);
	const [isTabsVisible, setIsTabsVisible] = useState<boolean>(true);

	const onChange = (v: boolean) => setIsTabsVisible(v);

	useEffect(() => {
		setIsFirstLevel(isTabsVisible);
	}, [isTabsVisible]);

	useEffect(() => {
		const onWheel = (event: WheelEvent) => {
			if (event.deltaY < 0) {
				setIsFirstLevel(true);
			} else if (event.deltaY > 0) {
				!isTabsVisible && setIsFirstLevel(false);
			}
		};
		window.addEventListener("wheel", onWheel);

		return () => {
			window.removeEventListener("wheel", onWheel);
		};
	}, [isTabsVisible, isFirstLevel]);

	return (
		<div className="bg-slate-100">
			<Navigation isFirstLevel={isFirstLevel} />
			<div className="flex justify-between gap-2.5 w-1000px mx-auto my-2.5 px-4 box-content">
				<Card className="w-694px">
					<Tabs onChange={onChange} />
					<Outlet />
				</Card>
				<div className="flex flex-col flex-1 gap-2.5">
					<CreativeCenter />
					<RecommendFollow />
					<Category />
					<MyUsual />
				</div>
			</div>
		</div>
	);
};

export default Home;
