'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.Deck, { foreignKey: 'card_id' });
    }
  }
  Card.init({
    question: DataTypes.TEXT,
    answer: DataTypes.STRING,
    point: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
