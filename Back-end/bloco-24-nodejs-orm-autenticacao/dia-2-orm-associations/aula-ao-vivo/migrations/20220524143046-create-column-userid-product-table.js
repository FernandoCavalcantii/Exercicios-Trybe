'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 2,
      // Tomar cuidado aqui pois essa migration ao ser executada, os produtos que já existiam, quando não existia a coluna userId no Banco, irão, de forma hard coded, ter os seus userId com valor 2, que é o defaultValue
      references: {
        model: 'Users',
        // Aqui se refere ao nome da TABELA 'Users' que está no banco. Tabela PLURAL, model do Sequelize SINGULAR 'User'
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Products', 'userId');
  },
};
