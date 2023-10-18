const express = require('express');
const router = express.Router();
const {index, tambahPosts, tampilkanDetail} = require("../Controller/postsController");

const {body} = require('express-validator');

router.get('/', index);
router.post('/store', [

   //validation
   body('title').notEmpty(),
   body('content').notEmpty()
],

);
router.get('/(:id)', tampilkanDetail);

// belum ngubah apa apa

module.exports = router;
