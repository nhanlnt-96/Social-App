const {sign} = require('jsonwebtoken');

const createToken = (user) => {
  const accessToken = sign({
    username: user.username,
    id: user.id
  }, 'thisIsJWTMakeItSecret');

  return accessToken;
};



module.exports = {createToken};
