const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      // Trabalhamos com a model com o nome no singular
      // Nosso banco fica responsável por armazenar vários bookS (no plural)
      // E a model representa uma instância de books, ou seja a model é UM book.
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      page_quantity: DataTypes.STRING,
      publisher: DataTypes.STRING,
    },
    {
      // underscored: true,
      // timestamps: false,
      // Faz o createdAt e o updateAt não serem criados / não serem esperados pela model (que por padrão espera que estas colunas existam)
    }
  );

  return Book;
};

module.exports = Book;
