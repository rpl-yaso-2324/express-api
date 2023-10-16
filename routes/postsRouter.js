const express = require("express");
const router = express.Router();
const { index, store } = require("../controller/postsController");
const { body } = require("express-validator");

router.get("/", index);
router.post(
	"/store",
	[
		//validator
		body("title").notEmpty(),
		body("content").notEmpty(),
	],
	store
);

module.exports = router;
