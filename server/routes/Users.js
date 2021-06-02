const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {createToken} = require('../jwt');

//registration
router.post('/', async (req, res) => {
  const {username, password} = req.body;
  const user = await Users.findOne({where: {username: username}});
  if (user) {
    res.json({error: 'Username already exist !'});
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash
      });
      res.json('Registered !');
    });
  }
});

//auth
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await Users.findOne({where: {username: username}});

  if (!user) {
    res.json({error: 'User does not exist'})
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({error: 'Username or password is wrong'});
      } else {
        const accessToken = createToken(user);
        res.cookie('access-token', accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true
        });

        res.json(accessToken);
      }
    });
  }
});

module.exports = router;
