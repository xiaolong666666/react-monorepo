import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

const Card = ({ children, className = "" }: Props) => {
	return (
		<div
			className={`bg-white border border-slate-200 rounded-sm shadow-md ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
