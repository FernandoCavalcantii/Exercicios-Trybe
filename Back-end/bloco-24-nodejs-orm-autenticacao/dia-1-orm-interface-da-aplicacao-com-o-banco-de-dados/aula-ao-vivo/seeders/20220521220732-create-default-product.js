'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Iphone',
        description: 'iPhone X',
        price: 15000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Galaxy',
        description: 'S21',
        price: 10000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
