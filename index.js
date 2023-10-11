const express = require("express");
const app = express();
const port = 3000;


//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//import route posts
const routePostingan = require('./routes/routePostingan');
app.use('/api/routePostingan', postsRouter); // use route posts di Express


app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
