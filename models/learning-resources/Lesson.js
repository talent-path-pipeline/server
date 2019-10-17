/* eslint-disable implicit-arrow-linebreak */
const { Sequelize } = require('sequelize');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, type) =>
  sequelize.define(
    'lesson',
    {
      // attributes
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      start: Sequelize.INTEGER,
      end: Sequelize.INTEGER,
      length: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      video_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      video_title: Sequelize.STRING,
      video_description: Sequelize.STRING,
      channel_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      channel_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    },
  );
