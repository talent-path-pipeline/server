const hashPassword = require('../utils/hashPasswords');
const checkPassword = require('../utils/checkPassword');
const { userExists, createUser, getUserPublic, getAllUsers, storeToken, updateUserData, destroyUser } = require('../db/user');
const createToken = require('../utils/generateToken');
const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

/**
 * Get All Users
 * @description: Handles all actions for getting all users
 */
async function readAllUsers() {
  try {
    return await getAllUsers();
  } catch (err) {
    throw err;
  }
}

/**
 * Get User By
 * @description: Handles all actions for getting all users
 */
async function readUser(email) {
  try {
    if (!(await userExists(email))) {
      throw new ErrorWithHTTPStatus('User does not exists.', 400);
    }
    return await getUserPublic(email);
  } catch (err) {
    throw err;
  }
}

/**
 * account.js
 * @description: Handles all actions for account information.
 * @param {string} email
 * @param {string} fullName
 * @param {string} password
 * @param {string} location
 * @param {string} personaType
 */
async function registerUser({ email, fullName, password, location, personaType }) {
  try {
    if (await userExists(email)) {
      throw new ErrorWithHTTPStatus('User already exists.', 400);
    }
    const { hash, salt } = await hashPassword(password);
    await createUser(email, hash, salt, fullName, location, personaType);
  } catch (err) {
    throw err;
  }
}

/**
 * loginUser
 * @description Handles the logic for logging in users.
 * @param {string} email
 * @param {string} password
 * @param {string} fullName
 * @returns {string} JWT Token
 */
async function loginUser({ email, password}) {
  try {
    if (!(await userExists(email))) {
      throw new ErrorWithHTTPStatus('User does not exists.', 400);
    }
    const { uuid, persona, fullName } = await checkPassword(email, password);
    const token = await createToken(uuid, persona, fullName);
    await storeToken(uuid, token);
    return token;
  } catch (err) {
    throw err;
  }
}

/**
 * Update Users With an email
 * @description: Updates user with an email
 * @param {string} email
 * @param {string} password
 * @param {string} fullName
 * @param {string} personaType
 * @returns {Object} Updated User
 */
async function updateUser({ email, fullName, location, personaType, uuid }) {
  try {
    await updateUserData(email, fullName, location, personaType, uuid);
    return await getUserPublic(email);
  } catch (err) {
    throw err;
  }
}

/**
 * Delete a user by id
 * @description: Handles all actions for deleting a user
 * @param {string} email
 */
async function deleteUser(email) {
  try {
    if (!(await userExists(email))) {
      throw new ErrorWithHTTPStatus('User does not exists.', 400);
    }
    const user = await getUserPublic(email);
    await destroyUser(email);
    return user;
  } catch (err) {
    throw err;
  }
}

module.exports = { readAllUsers, readUser, registerUser, loginUser, updateUser, deleteUser };
