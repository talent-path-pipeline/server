const bcrypt = require('bcryptjs');
const { getPassword } = require('../db/user');
const ErrorWithHTTPStatus = require('../utils/errorWithHTTPStatus');

async function checkPassword(email, password) {
  const foundUser = await getPassword(email);
  // Check Password
  const hashedPassword = await bcrypt.hash(password, foundUser.salt);
  if (foundUser.password !== hashedPassword) {
    throw new ErrorWithHTTPStatus('Authentication failed', 400);
  }
  return foundUser;
}
module.exports = checkPassword;
