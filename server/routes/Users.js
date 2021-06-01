const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');

//registration
router.post('/', async (req, res) => {
  const {username, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash
    });
    res.json('complete');
  });
});

//auth
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await Users.findOne({where: {username: username}});

  !user && res.json({error: 'User does not exist'});

  bcrypt.compare(password, user.password).then((match) => {
    !match ? res.json({error: 'Username or password is wrong'}) : res.json(username);
  })
})

module.exports = router;