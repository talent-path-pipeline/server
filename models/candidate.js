const { Sequelize } = require('sequelize');

module.exports = (sequelize, { DataTypes }) => {
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
    Candidate.belongsTo(models.User);
    Candidate.belongsTo(models.Recruiter, { foreignKey: 'contactedBy' });
    Candidate.belongsTo(models.Question);
    Candidate.belongsToMany(models.CandidateLesson, { through: models.CandidateLesson });
  };
};
