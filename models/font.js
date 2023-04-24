'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Font extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Font.init({
    Name: DataTypes.STRING,
    Ttf: DataTypes.STRING,
    Woff: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Font',
  });
  return Font;
};