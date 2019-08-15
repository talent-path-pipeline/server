const { Sequelize } = require('sequelize');

const lessonTag = (sequelize, { DataTypes }) => {
  const LessonTag = sequelize.define('lessonTags', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    tag: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lesson: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  LessonTag.associate = models => {
    LessonTag.hasMany(models.Tag);
    LessonTag.belongsToMany(models.Lesson);
  };
};

module.exports = lessonTag;
