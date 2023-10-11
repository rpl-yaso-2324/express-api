const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require('body-parser');

//parse aplication/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse aplication/json
app.use(bodyParser.json());

// import route posts
const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter);


app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});