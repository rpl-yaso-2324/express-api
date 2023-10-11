const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
// 	res.send("Hai isekai!");
// });

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//import route posts
const postsRouter = require('./routes/routePosts');
app.use('/api/posts', postingan); // use route posts di Express

app.listen(port, () => {
  console.log(`express nya berjalan di jalan ini -> http://localhost:${port}`)
})