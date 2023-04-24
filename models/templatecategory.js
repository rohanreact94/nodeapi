'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Templatecategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Templatecategory.init({
    Name: DataTypes.STRING,
    Position: DataTypes.STRING,
    Status: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Templatecategory',
  });
  return Templatecategory;
};