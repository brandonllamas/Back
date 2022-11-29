'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('params',[
    {
      Name:'Areas',
      Descripcion:'Nombre de las areas de trabajo',
      State:1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      Name:'Estado Ticket',
      Descripcion:'Tipo de estados que se encuentra en el ticket',
      State:1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },

    {
      Name:'Categorias',
      Descripcion:'Categorias que se encuentran',
      State:1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    
    {
      Name:'Perfiles',
      Descripcion:'Perfiles que se encuentran en el aplicativo',
      State:1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('params', null, {});
  }
};
