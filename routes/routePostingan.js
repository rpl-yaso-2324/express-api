const express = require('express');
const router = express.Router();
const { index, tambahPostingan, showPostingan, updatePostingan } = require('../controller/postsController');
const { body } = require('express-validator');

router.get("/", index);
router.post(
    "/tambahPostingan", 
    [
    // validation
    body("title").notEmpty(),
    body("content").notEmpty(),
], 
tambahPostingan
);

router.get('/(:id)', showPostingan);

router.patch('/update/:id', [

    //validation
    body('title').notEmpty(),
    body('content').notEmpty()

], updatePostingan);

module.exports = router;