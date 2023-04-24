'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize,DataTypes} = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.clipartcategories=require('./clipartcategory.js')(sequelize,DataTypes) 
db.clipart=require('./clipart.js')(sequelize,DataTypes) 
db.imagecategories=require('./imagecategory.js')(sequelize,DataTypes) 
db.image=require('./image.js')(sequelize,DataTypes)
db.shape=require('./shape.js')(sequelize,DataTypes)
db.shapecategories=require('./shapecatgoary.js')(sequelize,DataTypes)
db.background=require('./background.js')(sequelize,DataTypes)
db.backgroundcategories=require('./backgroundcatgoary.js')(sequelize,DataTypes)
db.backgroundcolor=require('./backgroundcolor.js')(sequelize,DataTypes)
db.templatecategories=require('./templatecategory.js')(sequelize,DataTypes);
db.template=require('./template.js')(sequelize,DataTypes);
db.layoutcategories=require('./layoutcategory.js')(sequelize,DataTypes);
db.layout=require('./layout.js')(sequelize,DataTypes);
db.colorpalet=require('./colorpalet.js')(sequelize,DataTypes);
db.color=require('./color.js')(sequelize,DataTypes);
db.font=require('./font.js')(sequelize,DataTypes);
module.exports = db;
 