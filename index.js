const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const postsRouter = require('./routes/postsRoutes');
app.use('/posts', postsRouter); 

app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
