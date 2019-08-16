const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'user',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: !0,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      persona: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      // options
    }
  );
