//import database
var connection = require('../config/database');

connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
	
	return res.status(500).json({
        status: false,
        message: 'Internal Server Error',
    })
	
})

return res.status(200).json({
    status: true,
    message: 'List Data Posts',
    data: rows	
})

module.exports = {index};