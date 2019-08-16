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
    Persona.hasMany(models.User);
    Persona.belongsTo(models.Permission);
  };
};

module.exports = persona;
