const express = require("express");
const app = express();
const port = 3000;

const cors = require('cors')

app.use(cors())

//import body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import route posts
const postsRoutes = require("./routes/postsRoutes");
app.use("/api/posts", postsRoutes); // use route posts di Express

app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
