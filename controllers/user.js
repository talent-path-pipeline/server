const validate = require('validate.js');
const { registerUser, loginUser } = require('../services/account');
const {
  registrationConstraints,
  loginConstraints,
} = require('../validations/userValidations');
const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

// POST Signup 
// Route: /api/user
exports.register = async (request, response, next) => {
  try {
    const { body } = request;
    const result = validate(body, registrationConstraints);
    if (result !== undefined) {
      throw new ErrorWithHTTPStatus('Invalid data received.', 400);
    }
    // Appending persona for candidate user (default)
    body.persona = 'candidate';
    await registerUser(body);
    // new stuff
    const token = await loginUser(body);
    // response.status(200).send('Registration Successful.');
    response
      .status(200)
      .set('token', `Bearer ${token}`)
      .send({message: 'Registration  & Login Successful.', token});
  } catch (err) {
    next(err);
  }
};

// POST Login
// Route: /api/user/login
exports.login = async (request, response, next) => {
  try {
    const { body } = request;
    const result = validate(body, loginConstraints);
    if (result !== undefined) {
      throw new ErrorWithHTTPStatus('Invalid data received.', 400);
    }
    const token = await loginUser(body);

    response
      .status(200)
      .set('token', `Bearer ${token}`)
      .send({message: 'Registration  & Login Successful.', token});
  } catch (err) {
    next(err);
  }
};
