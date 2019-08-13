const { Sequelize } = require('sequelize');

const path = (sequelize, type) => {
  const Path = sequelize.define('path', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    pathName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Path.associate = models => {
    Path.belongsToMany(models.Lesson);
  };
};

module.exports = path;
