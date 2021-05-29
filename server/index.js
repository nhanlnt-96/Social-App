const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('🚀 connected on port 3001');
  });
})