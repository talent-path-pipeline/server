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
    Lesson.belongsToMany(models.Candidate, { through: models.CandidateLesson });
    Lesson.belongsToMany(models.Tag, { through: models.LessonTag });
    Lesson.belongsTo(models.User);
    Lesson.belongsTo(models.Course);
    Lesson.belongsTo(models.Path);
  };
};

module.exports = lesson;
