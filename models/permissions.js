const { Sequelize } = require('sequelize');

const permission = (sequelize, type) => {
  const Permission = sequelize.define('permission', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
