const express = require('express');
const {validateToken} = require('../JWT/jwt');
const {signUpAccount, signInAccount, getAuthUser, getUserProfile, changePassword} = require('../controllers/Users');

const router = express.Router();

//sign up
router.post('/', signUpAccount);

//login
router.post('/login', signInAccount);
router.get('/auth-user', validateToken, getAuthUser);

//user profile
router.get('/profile/:id', getUserProfile);

//change password
router.put('/change-password', changePassword);

module.exports = router;