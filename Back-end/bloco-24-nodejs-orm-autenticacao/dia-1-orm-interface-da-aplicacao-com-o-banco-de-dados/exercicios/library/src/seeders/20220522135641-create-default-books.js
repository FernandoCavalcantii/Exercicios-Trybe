'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Provérbios Salomão',
        author: 'Salomão',
        page_quantity: 138,
        createdAt: new Date(),
        updatedAt: new Date(),
        publisher: 'Martin Claret',
      },
      {
        title: 'A Guerra dos Tronos : As Crônicas de Gelo e Fogo',
        author: 'George R. R. Martin',
        page_quantity: 694,
        createdAt: new Date(),
        updatedAt: new Date(),
        publisher: 'Suma',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  },
};
