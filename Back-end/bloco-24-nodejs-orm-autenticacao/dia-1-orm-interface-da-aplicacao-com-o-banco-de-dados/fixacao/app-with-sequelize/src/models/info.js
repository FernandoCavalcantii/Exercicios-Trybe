const Info = (sequelize, DataTypes) => {
  const Info = sequelize.define('Info', {
    cep: DataTypes.STRING,
    phone: DataTypes.INTEGER,
  });

  return Info;
};

module.exports = Info;
