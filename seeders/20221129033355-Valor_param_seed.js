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
     await queryInterface.bulkInsert('value_params',[
      //============ Areas

      {
        Valor:'Desarrollo', 
        Descripcion:'', 
        Valor_aux:'', 
        param_father:'', 
        param_id:1, 
        state:1, 
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        Valor:'Soporte', 
        Descripcion:'', 
        Valor_aux:'', 
        param_father:'', 
        param_id:1, 
        state:1, 
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    //  ==============================

    // ============ Estado ticket ===========
    {
      Valor:'Abierto', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:2, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },

    {
      Valor:'Seguimiento', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:2, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      Valor:'Finalizado', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:2, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    // ======================================

    //  ==================== Categorias ===
    {
      Valor:'Error en software', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:3, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      Valor:'Solicitud de Cambios', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:3, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },

    {
      Valor:'Solicitud de equipos', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:3, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    //  =====================================

    // =================== Perfiles ===========
    {
      Valor:'Administrador', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:4, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      Valor:'Cliente', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:4, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      Valor:'QA', 
      Descripcion:'', 
      Valor_aux:'', 
      param_father:'', 
      param_id:4, 
      state:1, 
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    // ========================================
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('value_params', null, {});

  }
};
