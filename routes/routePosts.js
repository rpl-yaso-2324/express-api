const express = require("express");
const router = express.Router();
const {index} = require("../controller/postsController")

//import express validator
const {body} = require("express-validator");

router.get ("/", index);
router.post(
    "/tambahPostingan",
    [
        // validation
        body("tittle").notEmpty(),
        body("content").notEmpty(),
    ],
    
);

module.exports = router;