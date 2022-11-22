'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      this.hasMany(models.Round, { foreignKey: 'deck_id' });
      this.hasMany(models.Card, { foreignKey: 'deck_id' });
    }
  }
  Deck.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
