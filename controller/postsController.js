// require connection
const connection = require("../config/database");
  
//import express validator
const { validationResult } = require('express-validator');

// import database
const index = (req, res) => {
    // query
    connection.query("SELECT * FROM posts ORDER BY id desc", function (err, rows) {
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

// function tambah data
const tambahPosts = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    // define formData
    let formData = {
        title: req.body.title,
        content: req.body.content
    };

    // insert query
    connection.query('INSERT INTO posts SET ?', formData, function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows
            });
        }
    });
};


function tampilkanDetail(req, res) {

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
                message: 'Data Post Not Found!',
            })
        }
        // if post found
        else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data Post',
                data: rows[0]
            })
        }
    })
}

              

module.exports = { index, tambahPosts,tampilkanDetail };
module.exports = {index};
