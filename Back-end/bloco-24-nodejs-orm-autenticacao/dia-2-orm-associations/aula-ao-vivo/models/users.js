const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    // MODEL NO SINGULAR 'USER'
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      // Faz o createdAt e o updateAt não serem criados
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
  };

  return User;
};

module.exports = User;
