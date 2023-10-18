const express = require("express");
const router = express.Router();
const { index,
	tambahPostingan,
	tampilkanDetail,
	updatePostingan,
    deletePostingan} = require("../controller/postsController");
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

router.delete('/delete/(:id)', deletePostingan);


module.exports = router;
