const UserModel = require('../models/authentication/User');
const { sequelize, Sequelize } = require('../config/config');
const ErrorWithHTTPStatus = require('../utils/errorWithHTTPStatus');

const User = UserModel(sequelize, Sequelize);

/**
 * User.js
 * @description: Contains all functions related to authentication.
 */
async function userExists(identifier) {
  console.log(`Looking for ${identifier} in database.`);
  try {
    const result = await User.findOne({
      where: {
        email: identifier
      }
    });
    return result !== null;
  } catch (err) {
    console.error(`An error has occured: ${err}`);
    throw err;
  }
}
async function createUser(email, password, salt, fullName, location, persona) {
  try {
    await User.create({
      email,
      password,
      salt,
      fullName,
      location,
      persona
    });
  } catch (err) {
    throw err;
  }
}
module.exports = { userExists, createUser };
