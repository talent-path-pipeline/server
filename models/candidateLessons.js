const { Sequelize } = require('sequelize');

const candidateLessons = (sequelize, type) => {
  const CandidateLessons = sequelize.define('candidateLessons', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    candidate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lessons: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  CandidateLessons.associate = models => {
    CandidateLessons.belongsToMany(models.Lesson);
    CandidateLessons.belongsToMany(models.Candidate);
  };
};

module.exports = candidateLessons;
