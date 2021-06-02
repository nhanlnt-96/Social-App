const {sign, verify} = require('jsonwebtoken');

const createToken = (user) => {
  const accessToken = sign({
    username: user.username,
    id: user.id
  }, 'thisIsJWTMakeItSecret');

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.header('access-token');

  if (!accessToken) return res.json({error: 'User not logged in!'});

  try {
    const validToken = verify(accessToken, 'thisIsJWTMakeItSecret');
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({error: error});
  }
}

module.exports = {createToken, validateToken};
