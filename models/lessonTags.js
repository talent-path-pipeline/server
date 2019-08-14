const { Sequelize } = require('sequelize');

const lessonTag = (sequelize, type) => {
  const LessonTag = sequelize.define('lessonTags', {
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
    lesson: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  LessonTag.associate = models => {
    LessonTag.hasMany(models.Tag);
    LessonTag.belongsToMany(models.Lesson);
  };
};

module.exports = lessonTag;
