//require connection
const connection = require("../config/database")

//function index posts
const index = (req, res) => {
    //query
    connection.query('SELECT * FROM posts ORDER BY id desc', 
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Kamu Salah',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Kamu Benar di tabel posts',
                data: rows
            })
        }
    });
}

const store = (req, res) => {
    connection.query('SELECT * FROM buku ORDER BY id desc', 
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Kamu Salah',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Kamu Benar di tabel',
                data: rows
            })
        }
    });
}

module.exports = { index, store };