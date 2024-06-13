const crypto = require("crypto");

const salt = Math.random().toString(16).slice(2);

function sign(payload, salt) {
	let header = { alt: "HS256", type: "JWT" };
	const tokenArr = [];

	tokenArr.push(base64urlencode(JSON.stringify(header)));
	tokenArr.push(base64urlencode(JSON.stringify(payload)));
	const signature = encryption(tokenArr.join("."), salt);

	return tokenArr.join(".") + "." + signature;
}

function base64urlencode(str) {
	return Buffer.from(str).toString("base64");
}

function encryption(value, salt) {
	return crypto.createHmac("SHA256", salt).update(value).digest("base64");
}

function verify(token, salt) {
	const [header, payload, signature] = token.split(".");
	const newSignature = encryption(`${header}.${payload}`, salt);

	return newSignature === signature;
}

const token = sign({ name: "xl" }, salt);
console.log(token);
console.log(verify(token, salt));
