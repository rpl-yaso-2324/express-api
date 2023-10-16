const express  = require('express');
const router = express.Router();
const {index} = require ("../controller/controllerPostingan.js");


//import express validator
const { body, validationResult } = require('express-validator');


router.get("/", index);
router.post(
    "/tambahPostingan",
[
//validation
body('title'),notEmpty(),
body('content'),notEmpty(),
],
tambahPostingan
);
router.get("/:id"),

module.exports =  router;