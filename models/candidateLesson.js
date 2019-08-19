const { Sequelize } = require('sequelize');

module.exports = (sequelize, { DataTypes }) => {
  const CandidateLesson = sequelize.define('candidateLesson', {
    // attributes
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    /*
    // auto generated for join table?
    candidate: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lesson: {
      type: DataTypes.UUID,
      allowNull: false,
    }, */
    timestamp: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  // CandidateLesson.associate = models => {
  //   CandidateLesson.belongsToMany(models.Lesson);
  //   CandidateLesson.belongsToMany(models.Candidate);
  // };
};
