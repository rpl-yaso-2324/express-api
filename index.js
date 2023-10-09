const express = require("express");
const app = express();
const port = 3000;


//import route posts
const postsRouter = require("./routes/postsRoutes");
app.use("/api/posts", postsRouter); // use route posts di Express

app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
