const express = require('express');
const router = express.Router();
const {index} = require("../controller/postsController")
const { body } = require("express-validator")

router.get("/", index);
router.post(
 "/tambahpostingan",
 [
    //validator
    body("title").notEmpty(),
    body("content").notEmpty(),
 ],
 tambahPostingan
);

module.exports = router;

