const validate = require('validate.js');
const { registerUser } = require('../services/account');
const { constraints } = require('../validations/userValidations');
const ErrorWithHTTPStatus = require('../utils/errorWithHTTPStatus');

exports.register = async (request, response, next) => {
  const { body } = request;
  try {
    const result = validate(body, constraints);
    if (result !== undefined) {
      throw new ErrorWithHTTPStatus('Invalid data received.', 400);
    }
    const user = {
      email: body.email,
      password: body.password,
      fullName: body.fullName,
      location: body.location,
      persona: 'candidate'
    };
    await registerUser(user);
    response.status(200).send('Registration Successful.');
  } catch (err) {
    next(err);
  }
};

exports.login = async (request, response, next) => {
  response
    .status(200)
    .send('You have made it to the login function in user controller.');
};
