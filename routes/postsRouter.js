const express = require('express');
const router = express.Router();
const {index} = require("../controller/postCotroller")

router.get("/", index);

module.export = router;

