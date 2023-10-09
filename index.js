const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const responseHTML = `
        <html>
            <body>
			<div>
                <h1>Kamu berhasil bukan aku ༼ つ ◕_◕ ༽つ <br> LAntas? (⌐■_■)</h1>
                <a href="/api/posts">
                    <button>Ke Halaman /api/posts</button>
                </a>
				</div>
            </body>
        </html>
    `;
  res.send(responseHTML);
});

//import route posts
const postsRouter = require("./routes/postsRoutes");
app.use("/api/posts", postsRouter); // use route posts di Express

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
