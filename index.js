const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import route postsn
const routePostingan = require("./routes/routePostingan");
app.use("/api/postingan", routePostingan); // use route posts di Express

app.listen(port, () => {
	console.log(`si express berjalan di http://localhost:${port}`);
});