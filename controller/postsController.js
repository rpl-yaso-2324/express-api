//require connection
const connection = require("../config/database")

//function index posts
const index = (req, res) => {
    //query
    connection.query('SELECT * FROM buku ORDER BY id desc', 
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server False',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows
            })
        }
    });
}

module.exports = { index };