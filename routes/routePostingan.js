const express = require('express');
const router = express.Router();
const {index} = require("../controller/controllerPostingan")

//import express validator
const {body} = require("express-validator");

router.get("/",index);
router.post(
    "/tambahPostingan",
    [
        //validation
        body('title').notEmpty(),
        body('content').notEmpty()
    ],
   tambahPostingan
   );

module.exports = router;