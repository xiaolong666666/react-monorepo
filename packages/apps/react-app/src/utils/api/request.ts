import axios from "axios";

const instance = axios.create();

instance.interceptors.response.use((res) => res.data);

const BASE_URL = "http://192.168.43.150:3006/api";

interface FeedOpts {
	url: string;
	startNum: number;
	pageSize: number;
}

export const get = (url: string, params: Record<string, any> = {}) =>
	// @ts-ignore
	instance<any, any>({
		methods: "get",
		url: `${BASE_URL}${url}`,
		params,
	});

export const getInfiniteLoad = (opts: FeedOpts) =>
	// @ts-ignore
	instance<any, any>({
		methods: "get",
		url: `${BASE_URL}${opts.url}`,
		params: {
			startNum: opts.startNum,
			pageSize: opts.pageSize,
		},
	});
