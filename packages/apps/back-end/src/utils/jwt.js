import jwt from "jsonwebtoken";

const SALT = "kklt&&bjt";

export const signature = (user, expiresIn = "60s") =>
	jwt.sign(user, SALT, {
		expiresIn,
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

export const refreshToken = async (refreshToken) =>
	new Promise((resolve, reject) => {
		jwt.verify(refreshToken, SALT, (err, data) => {
			if (err) {
				resolve({
					status: "error",
					message: err.message,
				});
			} else {
				const { username } = data;
				const token = signature({ username });
				const refreshToken = signature({ username }, "1h");
				resolve({
					status: "success",
					data: {
						token,
						refreshToken,
					},
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
				ctx.status = 401;
				ctx.body = {
					code: 401,
					message: "token is invalid",
				};
			}
		}
	}
};
