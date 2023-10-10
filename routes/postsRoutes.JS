const express = require ('express');
const router = express.Router();
const {index} = require ("..controler/postsControler.js");

router.get("/", index);


module.export = {index};