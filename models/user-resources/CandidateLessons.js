const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => sequelize.define(
  'candidateLessons',
  {
    // attributes
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    // candidate: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // lessons: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    timestamp: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    // options
  }
);
