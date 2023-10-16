let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'db_express_api'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

<<<<<<< HEAD
module.exports = connection; 
=======
module.exports = connection;
>>>>>>> 19dc3bb009bffbc1375a8ce3ced841fca097ce33
