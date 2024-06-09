import { Controller, RequestMapping, RequestMethod } from "../utils/index";
import recommend_follow_people from "../recommend_follow_people";

@Controller("")
export default class FollowPeopleController {
	@RequestMapping(RequestMethod.GET, "/recommend_follow_people")
	getFeed(ctx) {
		ctx.body = {
			list: recommend_follow_people,
		};
	}
}
