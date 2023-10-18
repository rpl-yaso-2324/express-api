const express = require('express');
const router = express.Router();
const { 
	index,
	tambahData,
	tampilkanDetail,
	updatePostingan,
} = require("../controller/postsController")
const { body } = require('express-validator');

router.get("/", index)
router.post(
    "/tambahData",
   [
       // validation
       body("tittle").notEmpty(),
       body("content").notEmpty()
   ],
   tambahData
);

router.get("/(:id)", tampilkanDetail);
router.patch(
	"/updatePostingan/(:id)",
	[
		//validation
		body("tittle").notEmpty(),
		body("content").notEmpty(),
	],
	updatePostingan
);


module.exports = router;