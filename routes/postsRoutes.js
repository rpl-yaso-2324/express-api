const express = require('express');
const router = express.Router();
const { index, tambahPosts } = require("../controller/postsController"); // Tambahkan controller tambahPosts

// Import express validator
const { body, validationResult } = require("express-validator");

router.get("/", index);

router.post('/tambahPosts',
    [
        // Validasi
        body('title').notEmpty().withMessage('Title is required'),
        body('content').notEmpty().withMessage('Content is required'),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // Panggil controller tambahPosts
        tambahPosts(req, res);
    }
);

module.exports = router;

