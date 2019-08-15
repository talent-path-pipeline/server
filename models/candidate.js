const { Sequelize } = require('sequelize');

const candidate = (sequelize, { DataTypes }) => {
  const Candidate = sequelize.define('candidate', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
      allowNull: true,
    },
    contactedBy: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    /*
    // removed for now
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
     */
  });

  Candidate.associate = models => {
    Candidate.hasMany(models.Question);
    Candidate.belongsTo(models.Recruiter);
    Candidate.hasOne(models.User);
    Candidate.belongsToMany(models.CandidateLessons);
  };
};

module.exports = candidate;
