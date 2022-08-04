const { User, Product } = require('../models');
// o User é referente a linha 3 de ../models/Users.js

const create = async (name, username, email, password) => {
  const newUser = await User.create({ name, username, email, password });

  return newUser;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  // const user = await User.findByPk(id, {
  //   include: { model: Product, as: 'products' },
  // });

  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  const products = await user.getProducts();
  // Função criada automaticamente pelo Sequelize para retornar os dados da tabela relacionada, no caso Produtos, que tem o atributo 'userId' igual ao 'id' do usuário armazenado na const user.
  return { ...user.dataValues, products };
};

const edit = async (id, name, username, email, password) => {
  await User.update({ name, username, email, password }, { where: { id } });
  return true;
};

const remove = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
