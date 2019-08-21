const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) =>
  sequelize.define(
    'lessonTags',
    {
      // attributes
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    },
    {
      // options
    }
  );
