const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routes/posts')
const commentRouter = require('./routes/comments')
const connect = require("./schemas/index")
connect()

app.use(express.json())
app.use('/api', [postRouter,commentRouter])





app.listen(port, () => {
    console.log(port, '3000 포트로 서버가 열렸어요!');
  });
  