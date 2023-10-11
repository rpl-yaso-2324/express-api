//import express validator
const { validationResult } = require('express-validator');
//require connection
const connection = require("../config/database")

//function index posts
const index = ('/', function (req, res) {
    //query
    connection.query('SELECT * FROM posts ORDER BY id desc', 
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'gak gitu caranya!!',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'selamat anda mendapatkan kebenaran di tabel posts',
                data: rows
            })
        }
    });
})

/**
 * STORE POST
 */
function tambahPostingan (req, res) {

    const validationreq = validationResult(req);

    if (!validationreq.isEmpty()) {
        return res.status(422).json({
            validationreq: validationreq.array()
        });
    }

    //define formData
    let formData = {
        title: req.body.title,
        content: req.body.content,
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


module.exports = { index, tambahPostingan };