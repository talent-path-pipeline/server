const validate = require('validate.js');
const { readAllUsers, readUser, registerUser, loginUser, updateUser } = require('../services/account');
const {
  registrationConstraints,
  loginConstraints,
  emailConstraints,
} = require('../validations/userValidations');
const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

// GET User
// Route: /api/user
exports.getUsers = async (request, response, next) => {
  try {
    const { body } = request;
    // If there is no body then return all users
    if(Object.keys(body).length == 0){
      const users = await readAllUsers();
      response.send(users);
    }
    // Validate email
    const result = validate(body, emailConstraints);
    if (result !== undefined) {
      throw new ErrorWithHTTPStatus('Invalid data received.', 400);
    }

    const users = await readUser(body.email);
    response.send(users);
  } catch (err) {
    next(err);
  }
};

// POST Signup / Create User
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

// DELETE User
// Route: /api/user/:id
exports.delete = async (request, response, next) => {
  try {
    response.send({message: 'DELETE User!!'});
  } catch (err) {
    next(err);
  }
};

// PATCH User
// Route: /api/user/:id
exports.update = async (request, response, next) => {
  try {
    const { body } = request;
    // Validate email
    const result = validate(body, emailConstraints);
    if (result !== undefined) {
      throw new ErrorWithHTTPStatus('Invalid data received. Please include a valid email.', 400);
    }
    // Get old data
    let testData = await readUser(body.email);
    if (!body.newData) {
      throw new ErrorWithHTTPStatus('Invalid data received. Please include a newData object.', 400);
    }
    for (let [key, value] of Object.entries(body.newData)) {
      testData[key]=value;
    }

    const newUser = await updateUser(testData)
    
    response
      .status(200)
      .send({message: `Update ${testData.fullName} Successful.`, newUser});
  } catch (err) {
    next(err);
  }
};