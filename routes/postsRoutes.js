const express = require('express');
const router = express.Router();
const { index } = require("../controller/postsController")
const { body, validationResult } = require('express-validator');

router.get("/", index)
router.post(
    "/tambahData"
   [
       // validation
       body("title").notEmpty(),
       body("content").notEmpty()
   ],
);





module.exports = router;