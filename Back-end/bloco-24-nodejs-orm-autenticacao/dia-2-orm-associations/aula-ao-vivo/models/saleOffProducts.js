// models/saleoffProducts.js
const SaleoffProducts = (sequelize, DataTypes) => {
  const SaleoffProducts = sequelize.define(
    'SaleoffProducts',
    {}, // Note que não temos nenhum atributo nesse model, pois é model de uma tabela de relacionamento, sequelize já entende que temos chave primária composta.
    { timestamps: false }
  );

  SaleoffProducts.associate = (models) => {
    models.Product.belongsToMany(models.Saleoff, {
      as: 'saleoffs',
      through: SaleoffProducts, // NOME DA TABELA NO BANCO
      //A idéia é que a relação entre Product e Saleoff vai atravessar (through) a tabela SaleoffProducts
      foreignKey: 'productId',
      otherKey: 'saleoffId',
    });

    // belongsToMany === relacionamento N:N
    models.Saleoff.belongsToMany(models.Product, {
      as: 'products',
      through: SaleoffProducts, // A idéia é que a relação entre Product e Saleoff vai atravessar (through) a tabela SaleoffProducts
      foreignKey: 'saleoffId', // se refere a model de belongsToMany
      otherKey: 'productId', // se refere a model do parametro
    });
  };

  return SaleoffProducts;
};

module.exports = SaleoffProducts;
