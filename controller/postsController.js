//requeri connection
const conection = require ("../config/database");

//function index posts
const index = (req , res ) => {
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
        })
    }
});
};