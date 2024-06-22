import { getRefreshToken } from "@/utils";
import { post } from "@/utils/api";

// 无感刷新 token
export const refresh = () =>
	post("/user/refresh", {
		refreshToken: getRefreshToken(),
	});
