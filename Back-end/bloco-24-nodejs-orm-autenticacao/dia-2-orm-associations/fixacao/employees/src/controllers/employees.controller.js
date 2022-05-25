// index.js
const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);
const getAll = async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    // Eager Loading abaixo
    // const employee = await Employee.findOne({
    //   where: { id },
    //   include: [
    //     {
    //       model: Address,
    //       as: 'addresses',
    //       attributes: { exclude: ['number'] },
    //     },
    //   ],
    // });

    //Lazy Loading abaixo,  basicamente, é não especificar uma propriedade includes no momento de realizar a query no banco
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    //Comentar 39-42 se não usar Lazy Loading
    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  /*
     Método usando Managed transaction
   */
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        {
          firstName,
          lastName,
          age,
        },
        { transaction: t }
      );

      await Address.create(
        {
          city,
          street,
          number,
          employeeId: employee.id,
        },
        { transaction: t }
      );

      return res.status(201).json({
        id: employee.id, // esse dado será nossa referência para validar a transação
        message: 'Cadastrado com sucesso',
      });
    });

    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
  // Método sem usar Transaction
  // try {
  //   const { firstName, lastName, age, city, street, number } = req.body;
  //   const employee = await Employee.create({ firstName, lastName, age });
  //   await Address.create({ city, street, number, employeeId: employee.id });
  //   return res.status(201).json({ message: 'Cadastrado com sucesso' });
  // } catch (e) {
  //   console.log(e.message);
  //   res.status(500).json({ message: 'Algo deu errado' });
  // }
  /*
    ---------------------------------
   */
  // Método usando Unmaneged Transaction
  // Primeiro iniciamos a transação
  // const t = await sequelize.transaction();
  // try {
  //   const { firstName, lastName, age, city, street, number } = req.body;
  //   // Depois executamos as operações
  //   const employee = await Employee.create(
  //     { firstName, lastName, age },
  //     { transaction: t }
  //   );
  //   await Address.create(
  //     { city, street, number, employeeId: employee.id },
  //     { transaction: t }
  //   );
  //   // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
  //   // Com isso, podemos finalizar a transação usando a função `commit`.
  //   await t.commit();
  //   return res.status(201).json({ message: 'Cadastrado com sucesso' });
  // } catch (e) {
  //   // Se entrou nesse bloco é porque alguma operação falhou.
  //   // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
  //   await t.rollback();
  //   console.log(e.message);
  //   res.status(500).json({ message: 'Algo deu errado' });
  // }
};

module.exports = { getAll, getById, create };
