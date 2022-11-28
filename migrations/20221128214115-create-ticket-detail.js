'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ticket_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Asunto: {
        type: Sequelize.STRING
      },
      Resumen: {
        type: Sequelize.STRING
      },
      Organizacion_id: {
        type: Sequelize.INTEGER
      },
      Div_Admin: {
        type: Sequelize.INTEGER
      },
      Area_Trabajo: {
        type: Sequelize.INTEGER
      },
      Categoria: {
        type: Sequelize.INTEGER
      },
      SubCategoria: {
        type: Sequelize.INTEGER
      },
      Detalle: {
        type: Sequelize.INTEGER
      },
      state:{
        type:Sequelize.INTEGER,
        defaultValue:1,
        allowNull:false
      },
      Prioridad: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Ticket_details');
  }
};