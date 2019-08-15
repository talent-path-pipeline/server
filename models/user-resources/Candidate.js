const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'candidate',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resume: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      links: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completedPaths: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completedCourses: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completedLessons: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactedBy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
