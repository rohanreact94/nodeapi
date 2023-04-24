'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Template_id: {
        type: Sequelize.INTEGER
      },
      Status: {
        type: Sequelize.STRING
      },
      Img: {
        type: Sequelize.STRING
      },
      Product: {
        type: Sequelize.STRING
      },
      No_of_side: {
        type: Sequelize.INTEGER
      },
      Unit: {
        type: Sequelize.INTEGER
      },
      Margin: {
        type: Sequelize.INTEGER
      },
      Width: {
        type: Sequelize.INTEGER
      },
      Height: {
        type: Sequelize.INTEGER
      },
      Is_photobook: {
        type: Sequelize.INTEGER
      },
      Output_type: {
        type: Sequelize.STRING
      },
      SKU: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Templates');
  }
};