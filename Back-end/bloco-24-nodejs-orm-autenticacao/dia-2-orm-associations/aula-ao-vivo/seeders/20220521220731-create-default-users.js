'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Fernando',
        username: 'Cavalcanti',
        email: 'teste@gmail.com',
        password: '12345',
      },
      {
        name: 'Ricardo',
        username: 'Silva',
        email: 'teste2@gmail.com',
        password: '67890',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
