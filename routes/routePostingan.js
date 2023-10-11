const express = require('express');
const router = express.Router();
const{index} = require("../controller/controllerPostingan.js");

//import express validator
const { body, validationResult } = require('express-validator');

router.get("/", index);
router.posts(
    "/tambahanposts",
    [    
    //validation
    body('title').notEmpty(),
    body('content').notEmpty()
    ],
);

module.export = router;