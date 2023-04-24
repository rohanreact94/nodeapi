'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackgroundColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BackgroundColor.init({
    Name: DataTypes.STRING,
    Color_code: DataTypes.STRING,
    Position: DataTypes.STRING,
    Status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BackgroundColor',
  });
  return BackgroundColor;
};