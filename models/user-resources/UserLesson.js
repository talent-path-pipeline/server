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
      type: Sequelize.DATE,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    // options
  }
);
