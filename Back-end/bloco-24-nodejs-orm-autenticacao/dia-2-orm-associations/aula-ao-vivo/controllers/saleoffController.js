const express = require('express');
const SaleoffService = require('../services/saleoffService');

const saleoffRouter = express.Router();

saleoffRouter.post('/', async (req, res) => {
  try {
    const { name, discount, startDate, endDate } = req.body;
    console.log(name);
    const start = new Date(startDate);
    const end = new Date(endDate);

    await SaleoffService.create(name, discount, start, end);

    res.status(201).json({ message: 'oferta criada com sucesso' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'deu ruim' });
  }
});

saleoffRouter.post('/:id/products', async (req, res) => {
  const { productsIds } = req.body;
  const { id } = req.params;

  await SaleoffService.addProductToSaleoff(id, productsIds);

  res.status(201).end();
});

saleoffRouter.get('/:id', async (req, res) => {
  console.log(1);
  const { id } = req.params;

  const saleOff = await SaleoffService.getById(id);

  res.status(200).json(saleOff);
});

saleoffRouter.get('/', async (req, res) => {
  try {
    const saleoffs = await SaleoffService.getAll();

    res.status(200).json(saleoffs);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'deu ruim' });
  }
});

module.exports = saleoffRouter;
