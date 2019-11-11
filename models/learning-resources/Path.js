/* eslint-disable implicit-arrow-linebreak */
const { Sequelize } = require('sequelize');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, type) =>
  sequelize.define(
    'path',
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
      subtitle: Sequelize.STRING,
      image_name: {
        type: Sequelize.STRING,
        defaultValue: 'path-image-main.jpg',
      },
    },
    {
      // options
    },
  );

// Path.hasMany(Course)
