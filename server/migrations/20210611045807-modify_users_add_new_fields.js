'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
    queryInterface.addColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
      }
    ),
    queryInterface.addColumn(
      'Users',
      'mobile',
      {
        type: Sequelize.STRING,
      }
    ),
  ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      [
        Sequelize.removeColumn('Users', 'email'),
        Sequelize.removeColumn('Users', 'mobile'),
      ]
    );
  }
};
