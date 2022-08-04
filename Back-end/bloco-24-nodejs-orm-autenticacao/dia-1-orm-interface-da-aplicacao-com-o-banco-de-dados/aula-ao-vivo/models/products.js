const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      // Trabalhamos com a model com o nome no singular
      // Nosso banco fica responsável por armazenar vários produtoS (no plural)
      // E a model representa uma instância de produtos, ou seja a model é UM produto.
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      // timestamps: false,
      // Faz o createdAt e o updateAt não serem criados
    }
  );

  return Product;
};

module.exports = Product;
