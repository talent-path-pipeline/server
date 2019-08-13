const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'lessonTags',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lesson: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
