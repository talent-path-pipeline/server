const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'lesson',
    {
      // attributes
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pathName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      // options
    }
  );
