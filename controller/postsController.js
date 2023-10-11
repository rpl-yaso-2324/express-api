const connection = require("../config/database")
const { body, validationResult } = require('express-validator');


const index = (req, res)=> {
    connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
        if (err) {
            return res.status(600).json({
                status: false,
                message: 'kamu salah',
            })
        } else {
            return res.status(900).json({
                status: true,
                message: 'List Data Posts',
                data: rows [0]
            })
        }
    });
}

function tambahData(req, res) => {

    const validationReq = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    let formData = {
        title: req.body.title,
        content: req.body.content
    }

    // insert query
    connection.query('INSERT INTO posts SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })

};


module.exports = {index, tambahData} ;