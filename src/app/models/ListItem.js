const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ListItem extends Model {}
  ListItem.init(
    {
      list_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      checked: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
    },
  );
  return ListItem;
};
