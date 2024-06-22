import React, { ReactNode } from "react";
import { useAuth } from "@/utils/hooks";

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	useAuth();

	return <div>{children}</div>;
};

export default Layout;
