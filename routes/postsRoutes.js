const express = require('express');
const router = express.Router();
const { index, tambahData } = require("../controller/postsController")
const { body } = require('express-validator');

router.get("/", index)
router.post(
    "/tambahData"
   [
       // validation
       body("title").notEmpty(),
       body("content").notEmpty()
   ],
   tambahData
);





module.exports = router;