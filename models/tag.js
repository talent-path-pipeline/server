const { Sequelize } = require('sequelize');

const tag = (sequelize, type) => {
  const Tag = sequelize.define('tag', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
