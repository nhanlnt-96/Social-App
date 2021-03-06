const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());
dotenv.config();

const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

const likeRouter = require('./routes/Likes');
app.use('/likes', likeRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log(`🚀 connected on port 3002`);
  });
}).catch((error) => {
  console.log(error);
});