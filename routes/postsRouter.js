const express = require("express");
const router = express.Router();
const { index, tambahPostingan } = require("../controller/postsController");
const { body } = require("express-validator");

router.get("/", index);
router.post(
	"/tambahPostingan",
	[
		//validator
		body("title").notEmpty(),
		body("content").notEmpty(),
	],
	tambahPostingan
);

module.exports = router;
