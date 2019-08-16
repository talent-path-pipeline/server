const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'course',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
