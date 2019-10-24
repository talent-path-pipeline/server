const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => sequelize.define(
  'course',
  {
    // attributes
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
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
