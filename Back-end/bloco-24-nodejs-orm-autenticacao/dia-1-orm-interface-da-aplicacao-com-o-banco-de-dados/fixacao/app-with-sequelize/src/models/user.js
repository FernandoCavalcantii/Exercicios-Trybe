const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      // aqui inserimos o datatype da coluna criada
      phone_num: DataTypes.STRING,
    },
    {
      // freezeTableName: true,
      // Diz ao Sqlz que o nome da tabela é igual ao da model, "User"
      underscored: true, // faz parâmetros recebidos em camelCase serem convertidos em snake_case (pois as colunas createdAt e updatedAt o sequelize busca por padrão eles camelCase)
      tableName: 'Xablau',
    }
  );

  return User;
};

module.exports = User;
