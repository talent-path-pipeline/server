const { Sequelize } = require('sequelize');

module.exports = (sequelize, type) => {
  const Recruiter = sequelize.define('recruiter', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    jobTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Recruiter.associate = models => {
    Recruiter.hasMany(models.Candidate, { foreignKey: 'contactedBy' });
    Recruiter.belongsTo(models.User);
  };
};
