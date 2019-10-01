const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => sequelize.define(
  'persona',
  {
    // attributes
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    // options
  }
);
