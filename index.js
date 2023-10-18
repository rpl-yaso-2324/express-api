const express = require("express");
const app = express();
const port = 4000;

//import body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

//import route posts
const routePostingan = require("./routes/postRoutes");
app.use("/api/postingan", routePostingan); // use route posts di Express

app.listen(port, () => {
	console.log(`si express berjalan di http://localhost:${port}`);
});
