const UserModel = require('../models/authentication/User');
const { sequelize, Sequelize } = require('../config/config');

const User = UserModel(sequelize, Sequelize);

/**
 * userExists
 * @description: Checks if the email already exists in the database
 * @param {string} email
 */
async function userExists(email) {
  try {
    const result = await User.findOne({
      where: {
        email
      }
    });
    return result !== null;
  } catch (err) {
    throw err;
  }
}
/**
 * createUser
 * @description Stores user data in the database
 * @param {string} email
 * @param {string} password
 * @param {string} salt
 * @param {string} fullName
 * @param {string} location
 * @param {string} persona
 */
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
 * @description Gets user data.
 * @param {string} email
 * @returns {object} An object containing hash and salt
 */
async function getUser(email) {
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
 * Finds and returns user token of already logged in user
 * @param {string} id The stored id in the JWT that corresponds with a user.
 */
async function getUserToken(id) {
  try {
    const result = await User.findOne({
      where: {
        id
      }
    });
    return { token: result.token, id: result.id };
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
module.exports = { userExists, createUser, getUser, storeToken, getUserToken };
