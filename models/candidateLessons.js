const { Sequelize } = require('sequelize');

const candidateLessons = (sequelize, { DataTypes }) => {
  const CandidateLessons = sequelize.define('candidateLessons', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    candidate: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lessons: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  CandidateLessons.associate = models => {
    CandidateLessons.belongsToMany(models.Lesson);
    CandidateLessons.belongsToMany(models.Candidate);
  };
};

module.exports = candidateLessons;
