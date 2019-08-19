const { Sequelize } = require('sequelize');

module.exports = (sequelize, { DataTypes }) => {
  const LessonTag = sequelize.define('lessonTags', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    /*
    // join table auto generate
    tag: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lesson: {
      type: DataTypes.UUID,
      allowNull: false,
    }, */
  });

  /*   LessonTag.associate = models => {
    LessonTag.hasMany(models.Tag);
    LessonTag.belongsToMany(models.Lesson);
  }; */
};
