const { body } = require("express-validator")
const express = require('express');
const router = express.Router();
const { index } = require("../controller/controllerPostingan")

router.get("/", index)
router.post(
    "/tambahPostingan",
    [
        //validation
        body("title").notEmpty(),
        body("content").notEmpty(),
    ], 
);
module.exports = router;