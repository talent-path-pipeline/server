const { Sequelize } = require('sequelize');

const persona = (sequelize, type) => {
  const Persona = sequelize.define('persona', {
    // attributes
    uuid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    persona: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Persona.associate = models => {
    Persona.hasMany(models.Permission);
    Persona.belongsTo(models.User);
  };
};

module.exports = persona;
