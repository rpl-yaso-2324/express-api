//import database
var connection = require('../config/database');

const index = (req, res) => {
connection.query('SELECT * FROM posts ORDER BY id desc', (err, rows) => {
if (err){	
	return res.status(500).json({
        status: false,
        message: 'Internal Server Error',
        error: err
    });
	
} else {

return res.status(200).json({
    status: true,
    message: 'List Data Posts',
    data: rows	
    });
}
});
}

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

res.status(200).json({ message: 'Postingan berhasil ditambahkan' });
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


module.exports = {index, tambahPostingan};