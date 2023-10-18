const express = require("express");
const router = express.Router();
const { index,
	tambahPostingan,
	tampilkanDetail,
	updatePostingan,} = require("../controller/postsController");
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
router.get("/(:id)", tampilkanDetail);
router.patch(
	"/updatePostingan/(:id)",
	[
		//validation
		body("title").notEmpty(),
		body("content").notEmpty(),
	],
	updatePostingan
);

module.exports = router;
