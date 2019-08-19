const UserModel = require('../models/authentication/User');
const { sequelize, Sequelize } = require('../config/config');

const User = UserModel(sequelize, Sequelize);

/**
 * User.js
 * @description: Contains all functions related to authentication.
 */
async function userExists(identifier) {
  try {
    const result = await User.findOne({
      where: {
        email: identifier
      }
    });
    return result !== null;
  } catch (err) {
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
/**
 * getPassword
 * @description Gets user hashed password and salt
 * @param {string} email
 * @returns {object} An object containing hash and salt
 */
async function getPassword(email) {
  try {
    return await User.findOne({
      where: {
        email
      }
    });
  } catch (err) {
    throw err;
  }
}
/**
 * storeToken
 * @description Stores token in the user's database
 * @param {string} email
 * @param {string} token
 */
async function storeToken(id, token) {
  try {
    await User.update({ token }, { where: { id } });
  } catch (err) {
    throw err;
  }
}
module.exports = { userExists, createUser, getPassword, storeToken };
