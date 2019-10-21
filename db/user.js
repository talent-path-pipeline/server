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
        email,
      },
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
      persona,
    });
  } catch (err) {
    throw err;
  }
}

/**
 * Gets a user with an email INCLUDING salt and password
 * @description Gets all of a user's data.
 * @param {string} email
 * @returns {object} An object containing hash and salt
 */
async function getUserPrivate(email) {
  try {
    return await User.findOne({
      where: {
        email,
      },
      attributes: ['uuid', 'email', 'salt', 'password', 'fullName', 'location', 'persona', 'createdAt', 'updatedAt']
    });
  } catch (err) {
    throw err;
  }
}

/**
 * Gets a user with an email INCLUDING salt
 * @description Gets user data.
 * @param {string} email
 * @returns {object} An object containing hash and salt
 */
async function getUserPublic(email) {
  try {
    return await User.findOne({
      where: {
        email,
      },
      attributes: ['uuid', 'email', 'fullName', 'location', 'persona', 'createdAt', 'updatedAt']
    });
  } catch (err) {
    throw err;
  }
}

/**
 * getAllUsers
 * @description Gets all user data.
 * @returns {object} An object containing hash and salt
 */
async function getAllUsers() {
  try {
    return await User.findAll({
      attributes: ['uuid', 'email', 'fullName', 'location', 'persona', 'createdAt', 'updatedAt']
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
        uuid:id,
      },
    });
    return { token: result.token, id: result.uuid };
  } catch (err) {
    throw err;
  }
}

/**
 * storeToken
 * @description Stores token in the user's database
 * @param {string} uuid The stored id in the JWT that corresponds with a user.
 * @param {string} token
 */
async function storeToken(uuid, token) {
  try {
    await User.update({ token }, { where: { uuid } });
  } catch (err) {
    throw err;
  }
}

/**
 * Updates a user
 * @description Updates a users data (not including password)
 * @param {string} email
 * @param {string} fullName
 * @param {string} location
 * @param {string} persona
 * @param {string} uuid The stored id in the JWT that corresponds with a user.
 */
async function updateUserData(email, fullName, location, persona, uuid) {
  try {
    await User.update({ 
      email,
      fullName,
      location,
      persona,
    }, { where: { uuid } });
  } catch (err) {
    throw err;
  }
}

/**
 * Delete a user
 * @description Deletes a user with a uuid
 * @param {string} id The stored id in the JWT that corresponds with a user.
 */
async function destroyUser(email) { 
  try {
    await User.destroy({ where: { email } });
  } catch (err) {
    throw err;
  }
}


module.exports = { userExists, createUser, getUserPrivate, getUserPublic, getAllUsers, storeToken, getUserToken, updateUserData, destroyUser };
