const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {createToken} = require('../jwt');

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
    !match && res.json({error: 'Username or password is wrong'});

    const accessToken = createToken(user);

    res.cookie('access-token', accessToken, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
      httpOnly: true
    })

    res.json(accessToken);
  })
})

module.exports = router;