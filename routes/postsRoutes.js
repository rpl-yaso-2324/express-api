const express = require('express');
const router = express.Router();
const { index } = require("../controller/postsController")

router.get("/", index);

module.exports = router;