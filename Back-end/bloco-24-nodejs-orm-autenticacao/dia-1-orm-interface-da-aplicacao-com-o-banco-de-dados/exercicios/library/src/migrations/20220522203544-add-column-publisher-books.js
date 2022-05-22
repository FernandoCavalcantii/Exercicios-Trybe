'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Books', 'publisher');
  },
};
