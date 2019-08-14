const jwt = require('jsonwebtoken');
const config = require('./config');


var token = jwt.sign({
    userId: 'user'
  }, config.jwt.secret, { expiresIn: '5d' });

  console.log(token);
  