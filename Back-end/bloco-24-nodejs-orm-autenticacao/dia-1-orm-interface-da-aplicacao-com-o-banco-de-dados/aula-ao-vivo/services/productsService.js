const { Product } = require('../models');
// o Product é referente a linha 3 de ../models/products.js

const create = async (name, description) => {
  const newProduct = await Product.create({ name, description });

  return newProduct;
};

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const edit = async () => {};

const remove = async (id) => {
  await Product.destroy({
    where: { id },
  });
};

module.exports = {
  create,
  getAll,
  edit,
  remove,
};
