'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clipart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clipart.init({
    Name: DataTypes.STRING,
    Category_id: DataTypes.INTEGER,
    Position: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clipart',
  });
  return Clipart;
};