const { Sequelize } = require('sequelize');

const course = (sequelize, type) => {
  const Course = sequelize.define('course', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
