'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Template.init({
    Name: DataTypes.STRING,
    Template_id: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Img: DataTypes.STRING,
    Product: DataTypes.STRING,
    No_of_side: DataTypes.INTEGER,
    Unit: DataTypes.INTEGER,
    Margin: DataTypes.INTEGER,
    Width: DataTypes.INTEGER,
    Height: DataTypes.INTEGER,
    Is_photobook: DataTypes.INTEGER,
    Output_type: DataTypes.STRING,
    SKU: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Template',
  });
  return Template;
};