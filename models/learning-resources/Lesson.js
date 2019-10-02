const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => sequelize.define(
  'lesson',
  {
    // attributes
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    videoURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    creator: {
      type: Sequelize.UUID,
      allowNull: false,
    },
  },
  {
    // options
  }
);
