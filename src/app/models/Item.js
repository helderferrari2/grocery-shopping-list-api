const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {}
  Item.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
    },
  );
  return Item;
};
