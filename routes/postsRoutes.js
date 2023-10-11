const express = require('express');
const router = express.Router();
const connection = require('../config/database');
const { body, validationResult } = require('express-validator');




// router.get("/", index);
// router.post{
//     "tambahPostingan",
//     [
//         body('title').notEmpty(),
//         body('content').notEmpty(),
//     ],
// };

const index = (req, res) => {
    //query
    connection.query('SELECT * FROM posts ORDER BY id desc', (err, rows) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows
            });
        }
    });
};

const tambahPostingan = [
    body('title').notEmpty().withMessage('siapa saya'),
    body('content').notEmpty().withMessage('saya satpol'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.status(200).json({ message: 'selamat postingannya berhasil' });
    }
];
router.get('/', index);
router.post('/tambahPostingan', tambahPostingan);


module.exports = router;
