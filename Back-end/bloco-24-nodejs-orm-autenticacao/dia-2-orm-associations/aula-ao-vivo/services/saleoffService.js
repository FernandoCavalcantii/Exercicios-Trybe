const { Saleoff, Product } = require('../models');

const create = async (name, discount, start, end) => {
  await Saleoff.create({ name, discount, startDate: start, endDate: end });

  return;
};

const getAll = async () => {
  const saleOffs = await Saleoff.findAll();

  return saleOffs;
};

const getById = async (id) => {
  const saleOff = await Saleoff.findByPk(id, {
    include: { model: Product, as: 'products', through: { attributes: [] } },
  });

  return saleOff;
};

const addProductToSaleoff = async (id, productsIds) => {
  // PROMOCAO 1
  const saleOff = await Saleoff.findByPk(id);

  console.log('Promocao', productsIds);

  const products = await Product.findAll({
    where: { id: productsIds },
  });

  console.log('produtos', products);

  await saleOff.addProducts(products);
};

module.exports = {
  getAll,
  create,
  getById,
  addProductToSaleoff,
};
