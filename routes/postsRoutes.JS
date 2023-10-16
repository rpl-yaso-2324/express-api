const express = require ('express');
const router = express.Router();
const {index} = require ("..controler/postsControler.js");

//import exoress validator
const { body } = require("express=validator");

router.get("/", index);
router.post(
    "/tanbahpostingan",
[
    //validitor   
body("title").notEmpty(),
body("content").notEmpty(),
],

);


module.export = router;
