const hashPassword = require('../utils/hashPasswords');
const { userExists, createUser } = require('../db/user');
const ErrorWithHTTPStatus = require('../utils/errorWithHTTPStatus');
/**
 * account.js
 * @description: Handles all actions for account information.
 * @param {string} email
 * @param {string} fullName
 * @param {string} password
 * @param {string} persona
 */
async function registerUser({ email, fullName, password, location, persona }) {
  try {
    if (await userExists(email)) {
      throw new ErrorWithHTTPStatus('User already exists.', 400);
    }
    const { hash, salt } = await hashPassword(password);
    await createUser(email, hash, salt, fullName, location, persona);
  } catch (err) {
    throw err;
  }
}
/**
 * loginUser
 * @description Handles the logic for logging in users.
 * @param {string} email
 * @param {string} password
 * @returns {string} JWT Token
 */
async function loginUser() {
  console.log('This is a placeholder for login service.');
}
module.exports = { registerUser, loginUser };
