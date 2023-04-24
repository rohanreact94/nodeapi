'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Layout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Layout.init({
    Name: DataTypes.STRING,
    Category_id: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Margin: DataTypes.INTEGER,
    Width: DataTypes.INTEGER,
    Height: DataTypes.INTEGER,
    Unit: DataTypes.INTEGER,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Layout',
  });
  return Layout;
};