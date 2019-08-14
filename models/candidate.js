const { Sequelize } = require('sequelize');

const candidate = (sequelize, type) => {
  const Candidate = sequelize.define('candidate', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    resume: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    links: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completedPaths: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completedCourses: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completedLessons: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Candidate.associate = models => {
    Candidate.hasMany(models.Question);
    Candidate.belongsTo(models.Recruiter);
    Candidate.hasOne(models.User);
    Candidate.belongsToMany(models.CandidateLessons);
  };
};

module.exports = candidate;
