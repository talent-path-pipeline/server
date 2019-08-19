const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => {
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
