const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get the token form header
  const token = req.header('x-auth-token');
  // check if nor token
  if (!token){
    return res.status(401).json({msg: 'No token, no party'});
  }
  try {
    const decoded = jwt.verify(token, config.get('JWTsecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({msg: 'Token invalid'});
  }
}
