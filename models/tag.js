const { Sequelize } = require('sequelize');

const tag = (sequelize, type) => {
  const Tag = sequelize.define('tag', {
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
  });

  Tag.associate = models => {
    Tag.belongsToMany(models.LessonTag);
  };
};

module.exports = tag;
