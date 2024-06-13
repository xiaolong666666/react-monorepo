import UserService from "../services/UserService";
import { Controller, RequestMapping, RequestMethod } from "../utils/index";

@Controller("/user")
export default class UserController {
	@RequestMapping(RequestMethod.GET, "/all")
	getAllUsers(ctx) {
		// return new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		resolve();
		// 	}, 1000);
		// }).then(() => {
		// 	console.log("13??", ctx);
		// 	ctx.body = {
		// 		data: [...new Array(100).keys()].map((v) => `user_${v}`),
		// 	};
		// });
		ctx.body = {
			data: [...new Array(100).keys()].map((v) => `user_${v}`),
		};
	}

	@RequestMapping(RequestMethod.POST, "/login")
	async login(ctx) {
		const { body } = ctx.request;
		const userService = new UserService();
		ctx.body = await userService.validate(body);
	}
}
