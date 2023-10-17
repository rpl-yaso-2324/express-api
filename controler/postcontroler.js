
//requeri connection
const conection = require ("../config/database");
//import express validator
const { body, validationResult } = require('express-validator'); 
//function index posts
function index  (req , res ) {
  //query
  connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
    if (err) {
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        })
    } else {
        return res.status(200).json({
            status: true,
            message: 'List Data Posts',
            data: rows
        });
      }
     });
};
//function tambah postingan
function index  (req , res ) {
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(422).json({
        errors: errors.array()
    });
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
