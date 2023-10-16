const express = require("express");
const app = express();
const port = 3000;

<<<<<<< HEAD
const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter);
=======


const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter);

>>>>>>> 19dc3bb009bffbc1375a8ce3ced841fca097ce33

app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
