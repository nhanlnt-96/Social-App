const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcryptjs');
const {createToken} = require('../middleware/jwt');
const {validateToken} = require('../middleware/jwt');

//registration
router.post('/', async (req, res) => {
  const {username, password, email} = req.body;
  const user = await Users.findOne({where: {username: username}});
  if (user) {
    res.json({error: 'Username already exist !'});
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
        email: email
      });
      res.json('Registered 😍');
    });
  }
});

//auth
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await Users.findOne({where: {username: username}});

  if (!user) {
    res.json({error: 'Hmm, that email address doesn\'t look right.\n 😳'})
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({error: 'Username or password is wrong 🤔'});
      } else {
        const accessToken = createToken(user);
        res.json({accessToken, username});
      }
    });
  }
});

router.get('/auth-user', validateToken, (req, res) => {
  res.json(req.user);
})

router.get('/profile/:id', async (req, res) => {
  const id = req.params.id;
  const profileUser = await Users.findByPk(id, {attributes: {exclude: ['password']}});

  res.json(profileUser);
});

router.put('/change-password', async (req, res) => {
  const {username, newPassword} = req.body;
  const user = await Users.findOne({where: {username: username}});
})

module.exports = router;
