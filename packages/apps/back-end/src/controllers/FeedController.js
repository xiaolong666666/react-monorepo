import { Controller, RequestMapping, RequestMethod } from "../utils/index";
import recommend from "../recommend";

@Controller("")
export default class FeedController {
	@RequestMapping(RequestMethod.GET, "/feed")
	getFeed(ctx) {
		const {
			query: { startNum = 0, pageSize = 6 },
		} = ctx;
		const list = recommend.slice(
			Number(startNum),
			Number(startNum) + Number(pageSize),
		);
		ctx.body = {
			list,
		};
	}
}
