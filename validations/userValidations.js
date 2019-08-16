/**
 * User Constraints
 * @description: Used with validation.js npm package to validate user registration data.
 */
const constraints = {
  email: {
    presence: true,
    length: { minimum: 3 },
    exclusion: {
      within: ['admin'],
      message: "'%{value}' is not allowed"
    }
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  },
  fullName: {
    presence: true,
    length: { minimum: 1 }
  }
};

module.exports = { constraints };
