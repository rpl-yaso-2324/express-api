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
//define formData
let formData = {
    title: req.body.title,
    content: req.body.content
}

module.exports = {index, tambahPostingan};