const { Sequelize } = require('sequelize');

const lesson = (sequelize, { DataTypes }) => {
  const Lesson = sequelize.define('lesson', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    videoURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    courseName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pathName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    instructorID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Lesson.associate = models => {
    Lesson.hasMany(models.LessonTag);
    Lesson.hasMany(models.Course);
    Lesson.hasMany(models.Path);
    Lesson.belongsToMany(models.CandidateLesson);
    Lesson.belongsToMany(models.User);
  };
};

module.exports = lesson;
