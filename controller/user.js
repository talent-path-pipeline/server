const validate = require('validate.js');
const User = require('../models/authentication/User');
const { constraints } = require('../validations/userValidations');

exports.register = (request, response, next) => {
  const { body } = request;

  /*
  // Testing purposes
  console.log(`Data Received: ${body.email} ${body.password} ${body.fullName}`);
  // */

  if (validate(body, constraints)) {
    response.status(400).send(`You sent bad data.`);
  } else {
    response
      .status(200)
      .send(
        'You have made it to the register function in user controller with valid data.'
      );
  }
  // Call a model to finish the registration process and storing data in database.
};
exports.login = async (request, response, next) => {
  response
    .status(200)
    .send('You have made it to the login function in user controller.');
};
