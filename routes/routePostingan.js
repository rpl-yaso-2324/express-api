const express = require('express');
const router = express.Router();
const {index, tambahPostingan, tampilkanDetail,updatePostingan} = require("../controller/controllerPostingan")

//import express validator
const {body} = require("express-validator");

//route digunakan untuk jalur atau rute yang digunakan untuk mencapai tujuan tertentu. 
router.get("/",index);
router.post(
    "/tambahPostingan",
    [
        //validation
        body('title').notEmpty(),
        body('content').notEmpty(),
    ],
   tambahPostingan
   );
   router.get("/(:id)", tampilkanDetail);
   router.patch('/updatePostingan/(:id)', [

    //validation
    body('title').notEmpty(),
    body('content').notEmpty()

],
updatePostingan
  );

module.exports = router;