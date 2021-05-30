const express = require('express');
const router = express.Router();
const {Comments} = require('../models');

//create comments
router.post('/', async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

//get comments
router.get('/', async (req, res) => {
  const comments = await Comments.findAll();
  res.json(comments);
})

module.exports = router;