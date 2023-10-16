//require connection
const connection = require("../config/database");

//import express validator
const {validationResult} = require('express-validator');

//function index posts
const index = (req, res) => {
    //query
    connection.query('SELECT * FROM postingan ORDER BY id desc',
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
                error: err,
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows
            })
        }
    });
};

//function tambah-postingan
const tambahPostingan = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //define formData
 let formData = {
    title: req.body.title,
    content: req.body.content
}

// insert query
connection.query('INSERT INTO postingan SET ?', formData, function (err, rows) {
    //if(err) throw err
    if (err) {
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        })
    } else {
        return res.status(200).json({
            status: true,
            message: 'Insert Data Successfully',
            data: rows[0]
        })
    }
});
}

 

module.exports = {
	index, tambahPostingan
};
