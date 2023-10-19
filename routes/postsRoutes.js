const express = require('express');
const router = express.Router();
const {
     index,
     tambahPosts,
     tampilkanDetail,
     updatePosts,
     deletePosts, } = require("../controller/postsController"); // Tambahkan controller tambahPosts

// Import express validator
const { body } = require("express-validator");

router.get("/", index);

router.post('/tambahPosts',
    [
        // Validasi
        body('title').notEmpty(),
        body('content').notEmpty()
    ],
    
        // Panggil controller tambahPosts
        tambahPosts
    
);

router.get('/(:id)',tampilkanDetail );
router.patch(
    "/updatePosts/(:id)",
    [
        //validation
        body('title').notEmpty(),
        body('content').notEmpty()
    ],
    updatePosts
);
router.delete("/deletePosts/(:id)",deletePosts) 

module.exports = router;

