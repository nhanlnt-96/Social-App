const express = require('express');
const router = express.Router();
const {Posts} = require('../models');

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

module.exports = router;