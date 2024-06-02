import React, { ReactEventHandler, ReactNode } from "react";

type Props = {
	children: ReactNode;
	onClick: ReactEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className="w-16 h-8 mx-4 text-sm text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300"
		>
			{children}
		</button>
	);
};

export default Button;
