const { Sequelize } = require('sequelize');

const course = (sequelize, type) => {
  const Course = sequelize.define('course', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    courseName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Course.associate = models => {
    Course.hasMany(models.Lesson);
  };
};

module.exports = course;
