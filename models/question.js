const { Sequelize } = require('sequelize');

const question = (sequelize, type) => {
  const Question = sequelize.define('question', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    question1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Question.associate = models => {
    Question.hasMany(models.Candidate);
  };
};

module.exports = question;
