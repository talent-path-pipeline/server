const { Sequelize } = require('sequelize');

const path = (sequelize, type) => {
  const Path = sequelize.define('path', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    pathName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Path.associate = models => {
    Path.hasMany(models.Lesson);
  };
};

module.exports = path;
