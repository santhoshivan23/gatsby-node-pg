'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Products', [
      {
        name: 'Basic',
        price: 10
      }, 
      {
        name: 'Pro',
        price: 20
      }, 
      {
        name: 'Premium',
        price: 30
      }, 
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
