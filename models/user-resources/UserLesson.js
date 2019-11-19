const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => sequelize.define(
  'userLessons',
  {
    // attributes
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    timestamp: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },
  {
    // options
  }
);
