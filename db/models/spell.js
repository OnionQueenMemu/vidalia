'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spell = sequelize.define('Spell', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    damageType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    hitDice: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    users: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Spell.associate = function(models) {
    Spell.belongsTo(models.Starter, { foreignKey: 'spellOneId'})
    Spell.belongsTo(models.Starter, { foreignKey: 'spellTwoId'})
  };
  return Spell;
};