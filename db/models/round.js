const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Deck, { foreignKey: 'deck_id' });
    }
  }
  Round.init({
    score: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};
