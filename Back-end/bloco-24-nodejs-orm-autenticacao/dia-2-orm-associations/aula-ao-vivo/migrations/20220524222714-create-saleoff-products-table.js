module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SaleoffProducts', {
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        // Por ser uma tabela de junção, a tabela não tem um "id", por isso definimos aqui o primaryKey, se não o sequelize criaria um id nesta tabela. Atenção pois tabela de junção tem primaryKeys compostas, então o atributo abaixo também tem o atributo primaryKey: true
      },
      saleoffId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Saleoffs',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SaleoffProducts');
  },
};
