/**
 * User Constraints
 * @description: Used with validation.js npm package to validate user registration data.
 */
const registrationConstraints = {
  email: {
    email: true,
    presence: true,
    length: { minimum: 3 }
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  },
  fullName: {
    presence: true,
    length: { minimum: 1 }
  },
  location: {
    length: { minimum: 2 }
  }
};

const loginConstraints = {
  email: {
    email: true,
    presence: true,
    length: { minimum: 3 }
  },
  password: {
    presence: true,
    length: { minimum: 8 }
  }
};

const emailConstraints = {
  email: {
    email: true,
    presence: true,
    length: { minimum: 3 }
  }
};

const updateDataConstraints = {
  email: {
    email: true,
    presence: true,
    length: { minimum: 3 }
  },
  fullName: {
    presence: true,
    length: { minimum: 1 }
  },
  location: {
    length: { minimum: 2 }
  },
  persona: {
    length: { minimum: 3 }
  },
};
 
module.exports = { registrationConstraints, loginConstraints, emailConstraints, updateDataConstraints };
