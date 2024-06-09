import { Controller, RequestMapping, RequestMethod } from "../utils/index";

@Controller("/user")
export default class UserController {
	@RequestMapping(RequestMethod.GET, "/all")
	getAllUsers(ctx) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		}).then(() => {
			ctx.body = {
				data: [...new Array(100).keys()].map((v) => `user_${v}`),
			};
		});
	}
}
