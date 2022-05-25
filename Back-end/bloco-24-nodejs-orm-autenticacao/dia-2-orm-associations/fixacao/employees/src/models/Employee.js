// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    }
  );

  Employee.associate = (models) => {
    // Employee.hasOne(models.Address, {
    //   foreignKey: 'employeeId',
    //   as: 'addresses',
    // });
    // Fazer requisição GET para http://localhost:3001/employees
    // Reparar no ID 4 para perceber diferença entre o Employee.HasOne e Employee.hasMany, utilizar primeiro exemplo de seeder
    // Basicamente o hasMany aglutinará na propriedade "addresses", em um array, os endereços da tabela Addresses, voltando 4 objetos (o employee "id" 4 tem 2 endereços). No hasOne, o retorno da requisição volta 5 objetos, repete o employee "id" 4, mas com o endereço "id" 5.
    Employee.hasMany(models.Address, {
      foreignKey: 'employee_id',
      as: 'addresses',
    });
  };

  return Employee;
};
