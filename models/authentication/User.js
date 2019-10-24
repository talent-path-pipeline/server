const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'user',
    {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      personaType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
