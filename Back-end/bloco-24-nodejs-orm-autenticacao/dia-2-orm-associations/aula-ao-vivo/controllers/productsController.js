const express = require('express');
const ProductService = require('../services/productsService');

const prodRouter = express.Router();

prodRouter.post('/', async (req, res) => {
  try {
    const { name, description, price, userId } = req.body;

    const newProduct = await ProductService.create(
      name,
      description,
      price,
      userId
    );

    return res.status(201).json(newProduct);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

prodRouter.get('/', async (_req, res) => {
  try {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

prodRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductService.getById(id);
    return res.status(200).json(products);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

prodRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    await ProductService.edit(id, name, description);

    return res.status(200).json({ message: 'Produto editado com sucesso' });
  } catch (e) {
    console.error(error.message);

    return res.status(500).send('Deu ruim');
  }
});

prodRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await ProductService.remove(id);

    return res
      .status(200)
      .json({ message: `Produto ${id} removido com sucesso` });
  } catch (e) {
    console.error(error.message);

    return res.status(500).send('Deu ruim');
  }
});

module.exports = prodRouter;
