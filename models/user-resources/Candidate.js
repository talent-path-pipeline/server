const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'candidate',
    {
      // attributes
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
        allowNull: true,
      },
      contactedBy: {
        type: Sequelize.UUID,
        allowNull: true,
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
    },
    {
      // options
    }
  );
