import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { post } from "@/utils/api";
import { setRefreshToken, setToken } from "@/utils";

const Login = () => {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location, navigate);

	const login = () => {
		post("/user/login", {
			username: "xl",
			password: "xl_hack",
		}).then((res) => {
			const { token, refreshToken } = res.data;
			setToken(token);
			setRefreshToken(refreshToken);
			navigate("/");
		});
	};
	return (
		<div
			onClick={login}
			className="w-7 h-7 text-xs leading-7 cursor-pointer"
		>
			Login
		</div>
	);
};

export default Login;
