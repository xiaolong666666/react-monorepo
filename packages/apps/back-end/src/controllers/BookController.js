import { Controller, RequestMapping, RequestMethod } from "../utils/index";

@Controller("/book")
export default class BookController {
	@RequestMapping(RequestMethod.GET, "/all")
	getAllBooks(ctx) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		}).then(() => {
			ctx.body = {
				data: [...new Array(100).keys()].map((v) => `book_${v}`),
			};
		});
	}
}
