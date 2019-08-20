const User = require('../models/authentication/User');

exports.register = async (request, response, next) => {
  response
    .status(200)
    .send('You have made it to the register function in user controller.');
};
exports.login = async (request, response, next) => {
  response
    .status(200)
    .send('You have made it to the login function in user controller.');
};
