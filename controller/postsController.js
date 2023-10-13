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
                message: 'Anda melakukannya dengan baik sehingga dapat mengakses tabel Posts',
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
                message: 'insert data anda sudah benar, silahkan lihat kembali halaman http:localhost:3000/api/posts (GET) anda akan melihat data terbaru',
                data: rows[0]
            })
        }
    })

};


/**
 * SHOW POST
 */
function showPostingan (req, res) {

    let id = req.params.id;

    connection.query(`SELECT * FROM posts WHERE id = ${id}`, function (err, rows) {

        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        }

        // if post not found
        if (rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Data Postingan tidak ditemukan',
            })
        }
        // if post found
        else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data Postingan',
                data: rows[0]
            })
        }
    })
}


function updatePostingan (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //id post
    let id = req.params.id;

    //data post
    let formData = {
        title: req.body.title,
        content: req.body.content
    }

    // update query
    connection.query(`UPDATE posts SET ? WHERE id = ${id}`, formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Update Data Successfully!'
            })
        }
    })

};


module.exports = { index, tambahPostingan, showPostingan, updatePostingan };