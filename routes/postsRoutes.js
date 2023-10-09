const express  = require('express');
const router = express.Router();
const {index} = require ("../controller/postsController.js");

router.get("/", index);

module.export = {index};