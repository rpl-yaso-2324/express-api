const express = require('express');
const router = express.Router();
const {index} = require("../controller/postsController")

router.get("/", index);
router.post("/tambahData", tambahData);

module.exports = router;