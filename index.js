const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// const postsRouter = require('./routes/postsRoutes');
// app.use('/api/posts', postsRouter);

//import route posts
const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter); // use route posts di Express

app.listen(port, () => {
  console.log(`maju bang http://localhost:${port}`)
});