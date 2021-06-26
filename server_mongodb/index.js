const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, welcome to Social-App-Api');
});

//user router
const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

//post router
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

//likes router
const likeRouter = require('./routes/Likes');
app.use('/likes', likeRouter);

//comment router
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);


mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`🚀 connected on port ${PORT}`))).catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);