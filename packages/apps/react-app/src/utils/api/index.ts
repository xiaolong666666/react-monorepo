import axios from "axios";
import { getToken, setToken, setRefreshToken } from "..";
import { refresh } from "@/service";

const instance = axios.create({
	baseURL: "/api",
	timeout: 5000, // 设置请求超时时间为 5 秒
});

const withoutTokenRequestUrlList = ["/api/user/login", "/api/user/register"];

instance.interceptors.request.use(
	(config: any) => {
		if (!withoutTokenRequestUrlList.includes(config.url)) {
			config.headers["Authorization"] = "Bearer " + getToken();
		}
		return config;
	},
	(err) => {
		// Todo: 全局错误处理
		console.error("err", err);
	},
);

instance.interceptors.response.use(
	(res) => res.data,
	async (err) => {
		// Todo: 全局错误处理
		try {
			if (err.response.status === 401) {
				const res = await refresh();
				const { token, refreshToken } = res.data;
				setToken(token);
				setRefreshToken(refreshToken);
				err.response.config.headers["Authorization"] =
					"Bearer " + token;
				return new Promise((resolve, reject) => {
					// 将 token 失效的请求重新发送
					resolve(instance(err.response.config));
				});
			}
			console.error("err", err);
		} catch (error) {
			window.location.href = "http://localhost:3000/signin";
		}
	},
);

interface FeedOpts {
	url: string;
	startNum: number;
	pageSize: number;
}

export const get = (url: string, params: Record<string, any> = {}) =>
	// @ts-ignore
	instance<any, any>({
		method: "get",
		url,
		params,
	});

export const post = (url: string, data: Record<string, any> = {}) =>
	// @ts-ignore
	instance<any, any>({
		method: "post",
		url,
		data,
		headers: {
			// Authorization: "Bearer your_token",
			"Content-Type": "application/json",
		},
	});

export const getInfiniteLoad = (opts: FeedOpts) =>
	// @ts-ignore
	instance<any, any>({
		method: "get",
		url: opts.url,
		params: {
			startNum: opts.startNum,
			pageSize: opts.pageSize,
		},
	});
