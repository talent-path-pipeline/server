const { Sequelize } = require('sequelize');

const recruiter = (sequelize, type) => {
  const Recruiter = sequelize.define('recruiter', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    jobTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Recruiter.associate = models => {
    Recruiter.hasMany(models.User);
  };
};

module.exports = recruiter;
