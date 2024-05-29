import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./search";
import MenuAlarm from "./MenuAlarm";
import { PureTabs } from "../../pages/home/tabs";

type Props = {
	isFirstLevel: boolean;
};

const Navigation = ({ isFirstLevel }: Props) => {
	return (
		<div className="sticky top-0 left-0 w-screen h-13 bg-white shadow box-border overflow-hidden z-50">
			<div className="max-w-7xl min-w-6xl mx-auto my-0 flex items-center">
				<div
					className={`relative transition-all duration-300 ${isFirstLevel ? "top-0" : "-top-13"}`}
				>
					<div className="w-full h-13 flex justify-between items-center min-w-max pl-4 pr-14">
						<div className="flex items-center h-full">
							<Logo />
							<Menu />
						</div>
						<Search />
						<MenuAlarm />
					</div>
					<div className="w-full h-13 flex justify-between items-center min-w-max pl-4 pr-14">
						<div className="flex items-center h-full">
							<Logo />
							<PureTabs />
						</div>
						<Search />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
