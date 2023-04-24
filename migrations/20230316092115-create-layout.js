'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Layouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Category_id: {
        type: Sequelize.INTEGER
      },
      Status: {
        type: Sequelize.STRING
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
      Unit: {
        type: Sequelize.INTEGER
      },
      Image: {
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
    await queryInterface.dropTable('Layouts');
  }
};