import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyParser";
import "./controllers/index";
import { RequestMethod, controllers } from "./utils/index";
import { jwtVerify } from "./utils/jwt";

const app = new Koa();
const router = new Router();
const COMMON_API = "/api";

app.use(bodyParser()); // 解析请求体

app.use(async (ctx, next) => {
	ctx.set("Access-Control-Allow-Origin", "*");
	ctx.set("Access-Control-Allow-Header", "*");
	ctx.set("Access-Control-Allow-Methods", "*");
	ctx.set("Content-Type", "application/json;charset=utf-8");

	if (ctx.request.method.toLowerCase() === RequestMethod.OPTIONS) {
		ctx.status = 200;
	} else {
		await next(ctx);
	}
});

app.use(
	jwtVerify(["/api/user/login", "/api/user/register", "/api/user/refresh"]),
);

controllers.forEach((controller) => {
	let { constructor, path, method, handler } = controller;
	const { prefix } = constructor;

	if (prefix) {
		path = `${COMMON_API}${prefix}${path}`;
	} else {
		path = `${COMMON_API}${path}`;
	}
	router[method](path, handler);
});

app.use(router.routes());

app.listen("3006", () => {
	console.log("listening on http://localhost:3006");
});
