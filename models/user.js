const { Sequelize } = require('sequelize');
const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

const user = (sequelize, type) => {
  const User = sequelize.define('user', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    persona: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  // associations here
  User.associate = models => {
    User.hasMany(models.Lesson);
    User.hasMany(models.Persona);
    User.belongsTo(models.Candidate);
    User.belongsTo(models.Recruiter);
  };

  return User;
};

// /** Create */
// exports.insert = async ({ email, password, fullName, persona }) => {
//   try {
//     if (!email || !password || !fullName || !persona) {
//       throw new ErrorWithHTTPStatus('Missing Properties', 400);
//     }
//     user.create({ email, password, fullName, persona }).then(jane => {
//       console.log("Jane's auto-generated ID:", jane.id);
//     });
//   } catch (error) {}
// };

module.exports = user;
