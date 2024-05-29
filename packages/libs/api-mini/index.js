const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const recommend = require("./recommend");
const recommend_follow_people = require("./recommend_follow_people");

app.use(cors());

router.get("/api/feed", (req, res) => {
	const {
		query: { startNum = 0, pageSize = 6 },
	} = req;
	const list = recommend.slice(
		Number(startNum),
		Number(startNum) + Number(pageSize),
	);
	res.json({ list });
});

router.get("/api/recommend_follow_people", (req, res) => {
	const {
		query: { rec_type = "PC_HOME_FEED" },
	} = req;
	res.json({ list: recommend_follow_people });
});

app.use(router);

app.listen(3006, () => {
	console.log("listening on http://localhost:3006");
});
