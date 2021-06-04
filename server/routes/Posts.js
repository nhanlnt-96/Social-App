const express = require('express');
const router = express.Router();
const {Posts} = require('../models');
const {validateToken} = require('../middleware/jwt');

//create post
router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

//get post
router.get('/', async (req, res) => {
  const allPosts = await Posts.findAll();
  res.json(allPosts);
});

//individual pages base on ID
router.get('/post-by-id/:id', async (req, res) => {
  const id = req.params.id;
  const postById = await Posts.findByPk(id);
  res.json(postById);
})


module.exports = router;