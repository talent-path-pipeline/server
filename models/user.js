const { Sequelize } = require('sequelize');

const user = (sequelize, type) => {
  const User = sequelize.define('user', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    persona: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  // associations here
  User.associate = models => {
    User.hasMany(models.Lesson);
    User.hasMany(models.Persona);
    User.belongsTo(models.Candidate);
    User.belongsTo(models.Recruiter);
  };

  return User;
};

module.exports = user;
