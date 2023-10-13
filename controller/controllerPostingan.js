//require connection
const connection = require("../config/database");

//import express validator
<<<<<<< HEAD
const { validationResult } = require("express-validator");

//function index posts
const index = (req, res) => {
	//query
	connection.query(
		"SELECT * FROM postingan ORDER BY id desc",
		function (err, rows) {
			if (err) {
				return res.status(500).json({
					status: false,
					message: "Internal Server Error",
				});
			} else {
				return res.status(200).json({
					status: true,
					message: "List Data Posts",
					data: rows,
				});
			}
		}
	);
=======
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
>>>>>>> c8a674c58c86935196899887f66fbaa56b419c10
};

//function tambah postingan
(req, res) => {
    const errors = validationResult(req);

<<<<<<< HEAD
//define formData
function tambahPostingan(req, res) {
    
}

module.exports = {
	index,
	tambahPostingan,
};
=======
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
}

 //define formData
 let tambahData = {
    title: req.body.title,
    content: req.body.content
}

// insert query
connection.query('INSERT INTO postingan SET ?', tambahData, function (err, rows) {
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
});

module.exports = {
	index, tambahData
};
>>>>>>> c8a674c58c86935196899887f66fbaa56b419c10
