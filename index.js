const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// import route posts
const postsRouter = require('./routes/postsRouter');
app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`berjalan di http://localhost:${port}`);
});
