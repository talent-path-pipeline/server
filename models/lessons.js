const { Sequelize } = require('sequelize');

const lesson = (sequelize, type) => {
  const Lesson = sequelize.define('lesson', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
      type: Sequelize.INTEGER,
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
