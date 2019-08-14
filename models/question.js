const { Sequelize } = require('sequelize');

const question = (sequelize, type) => {
  const Question = sequelize.define('question', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    question: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Question.associate = models => {
    Question.belongsToMany(models.Candidate);
  };
};

module.exports = question;
