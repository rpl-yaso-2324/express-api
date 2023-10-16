//require connection
const connection = require("../config/database")

//import database
const index = (req,res) => {
        //query
        connection.query(
            "SELECT * FROM posts ORDER BY id desc", 
            function (err, rows) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    pesan: 'Internal Server Error',
                })
            } else {
                return res.status(200).json({
                    status: true,
                    pesan: 'List Data Posts',
                    data: rows
                })
            }
        });
    
    
}


module.exports = {index};