const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'recruiter',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
