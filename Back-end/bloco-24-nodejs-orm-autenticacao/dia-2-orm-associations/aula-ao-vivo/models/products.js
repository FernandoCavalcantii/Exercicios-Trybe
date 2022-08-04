const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      // Trabalhamos com a model com o nome no singular
      // Nosso banco fica responsável por armazenar vários produtoS (no plural)
      // E a model representa uma instância de produtos, ou seja a model é UM produto.
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      // A foreignKey da linha 23 se refere a este atributo desta nossa model
    },
    {
      // timestamps: false,
      // Faz o createdAt e o updateAt não serem criados
    }
  );

  Product.associate = (models) => {
    /* O parâmetro `as` indica para o sequelize que queremos referenciar o usuário de um produto como `user`. Você vai entender a necessidade disso mais pra frente
			 Já o parâmetro `foreignKey` indica para o sequelize que queremos que nossa FK se chame `userId`
		*/
    Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Product;
};

module.exports = Product;
