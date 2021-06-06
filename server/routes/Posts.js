const express = require('express');
const router = express.Router();
const {Posts, Likes} = require('../models');
const {validateToken} = require('../middleware/jwt');


//create post
router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

//get post
router.get('/', validateToken, async (req, res) => {
  const allPosts = await Posts.findAll({include: [Likes]});

  const likedPosts = await Likes.findAll({where: {UserId: req.user.id}})
  res.json({allPosts, likedPosts});
});

//individual pages base on ID
router.get('/post-by-id/:id', async (req, res) => {
  const id = req.params.id;
  const postById = await Posts.findByPk(id, {include: [Likes]});
  res.json(postById);
})


module.exports = router;