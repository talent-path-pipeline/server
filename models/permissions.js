const { Sequelize } = require('sequelize');

const permission = (sequelize, type) => {
  const Permission = sequelize.define('permission', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    permission: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Permission.associate = models => {
    Permission.belongsToMany(models.Persona);
  };
};

module.exports = permission;
