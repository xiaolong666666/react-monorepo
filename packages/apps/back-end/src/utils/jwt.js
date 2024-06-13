import jwt from "jsonwebtoken";

const SALT = "kklt&&bjt";

export const signature = (user) =>
	jwt.sign(user, SALT, {
		expiresIn: "10h",
	});

const verify = async (token) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, SALT, (err, data) => {
			if (err) {
				resolve({
					status: "error",
					message: err.message,
				});
			} else {
				resolve({
					status: "success",
					data,
				});
			}
		});
	});

export const jwtVerify = (whiteList) => async (ctx, next) => {
	if (whiteList.includes(ctx.path)) {
		next();
	} else {
		let token;
		try {
			token = ctx.request.headers.authorization.split("Bearer ")[1];
		} catch (e) {}
		if (!token) {
			ctx.status = 401;
			ctx.body = {
				code: 401,
				message: "token is required",
			};
			return;
		} else {
			const res = await verify(token);
			if (res.status === "success") {
				next();
			} else {
				ctx.status = 403;
				ctx.body = {
					code: 403,
					message: "token is invalid",
				};
			}
		}
	}
};
