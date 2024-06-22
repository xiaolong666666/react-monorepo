import { signature } from "../utils/jwt";

export default class UserService {
	async validate({ username, password }) {
		if (username && password) {
			if (username === "xl") {
				if (password === "xl_hack") {
					const token = signature({ username });
					const refreshToken = signature({ username }, "1h");
					return {
						code: 200,
						msg: "登录成功！",
						status: "success",
						data: {
							token,
							refreshToken,
						},
					};
				} else {
					return {
						code: 200,
						msg: "密码错误！",
						status: "error",
					};
				}
			} else {
				return {
					code: 200,
					msg: "用户不存在！",
					status: "error",
				};
			}
		} else {
			return {
				code: 200,
				msg: "用户名或密码不能为空！",
				status: "error",
			};
		}
	}

	async refresh({ refreshToken }) {}
}
