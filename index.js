const express = require("express");
const app = express();
const port = 3000;



const postsRouter = require('./routes/postsRoutes');
app.use('/api/posts', postsRouter);


app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
