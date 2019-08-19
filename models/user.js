const { Sequelize } = require('sequelize');
const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

module.exports = (sequelize, type) => {
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
    User.hasMany(models.Lesson, { foreignKey: 'creator' });
    User.belongsTo(models.Persona);
  };

  return User;
};
