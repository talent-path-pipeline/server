const { Sequelize } = require('sequelize');

const persona = (sequelize, type) => {
  const Persona = sequelize.define('persona', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
