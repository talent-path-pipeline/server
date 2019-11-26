/* eslint-disable implicit-arrow-linebreak */
const { Sequelize } = require('sequelize');

// eslint-disable-next-line no-unused-vars
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
        allowNull: true,
      },
      // personaType: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
    },
    {
      // options
    },
  );
