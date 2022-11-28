'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_ticket: {
        type: Sequelize.STRING
      },
      trabajo_group: {
        type: Sequelize.STRING
      },
      operator_group: {
        type: Sequelize.STRING
      },
      detail_user: {
        type: Sequelize.INTEGER
      },
      state:{
        type:Sequelize.INTEGER,
        defaultValue:1,
        allowNull:false
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
    await queryInterface.dropTable('Tickets');
  }
};