const express = require('express');
const UserService = require('../services/userService');

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    await UserService.create(name, username, email, password);

    return res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

userRouter.get('/', async (_req, res) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    return res.status(200).json(user);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

userRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email, password } = req.body;

    await UserService.edit(id, name, username, email, password);

    return res.status(200).json({ message: 'User editado com sucesso' });
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await UserService.remove(id);

    return res.status(200).json({ message: `User ${id} removido com sucesso` });
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Deu ruim');
  }
});

module.exports = userRouter;
