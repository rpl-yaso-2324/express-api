const express = require("express");
const app = express();
const port = 3000;

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// import route posts
const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`berjalan di http://localhost:${port}`);
});
