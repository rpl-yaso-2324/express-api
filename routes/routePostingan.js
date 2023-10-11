const { body } = require("express-validator")

router.get("/", index);
router.post(
    "/tambahPostingan",
    [
        //validation
        body("title").notEmpty(),
        body("content").notEmpty(),
    ],
);

module.exports = router;