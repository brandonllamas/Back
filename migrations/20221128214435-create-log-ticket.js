'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Log_tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Comentario: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      User_asing: {
        type: Sequelize.INTEGER
      },
      User_to_asing: {
        type: Sequelize.INTEGER
      },
      Ticket_id: {
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
    await queryInterface.dropTable('Log_tickets');
  }
};