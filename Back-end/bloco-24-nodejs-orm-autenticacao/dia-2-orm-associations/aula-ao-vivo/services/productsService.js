const { Product, User } = require('../models');
// o Product é referente a linha 3 de ../models/products.js

const create = async (name, description, price, userId) => {
  const newProduct = await Product.create({ name, description, price, userId });

  return newProduct;
};

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id, {
    include: {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
  });
  // Esse users da linha 19 é o apelido que demos para a associação feita na model Product, na linha 24
  return product;
};

const edit = async (id, name, description) => {
  await Product.update({ name, description }, { where: { id } });
  return true;
};

const remove = async (id) => {
  await Product.destroy({
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
