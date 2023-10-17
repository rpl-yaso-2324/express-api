const express = require('express');
const router = express.Router();
const {index, tambahPostingan, tampilkanDetail, prosesUpdate} = require("../controller/controllerPostingan")

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
   router.get("/(:id)", tampilkanDetail);
   router.patch('/update/:id', [

    //validation
    body('title').notEmpty(),
    body('content').notEmpty()

],
prosesUpdate
  );

module.exports = router;