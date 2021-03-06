const jwt = require('jsonwebtoken');

const jwtKey = require('../_secrets/keys').jwtKey;

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Token '});
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

// generate token for authentication
function generateToken(user) {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, jwtKey, options);
}