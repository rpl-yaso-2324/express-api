//variabel express ini sama saja saat kita menggunakan modul
const express = require("express");
//agar app ini menjalankan express supaya bisa di panggil method nya
const app = express();
const port = 3000;

//import body-parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import route posts
const routePostingan = require('./routes/routePostingan');
app.use('/api/postingan', routePostingan); // use route posts di Express

app.listen(port, () => {
  console.log(`nih express nya liat aja disini => http://localhost:${port}`)
})
