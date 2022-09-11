const bodyParser = require('body-parser');
const express = require('express');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const {
  PORT,
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_BAD_REQUEST_STATUS,
} = require('./helpers/constants');

const User = require('./models/userModel');

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    User.isValid(firstName, lastName, email, password);
    const newUser = await User.create(firstName, lastName, email, password);
    return res
      .status(HTTP_CREATED_STATUS)
      .json({ id: newUser.insertId, ...newUser });
  } catch (e) {
    console.error(e.message);
    return res.status(HTTP_BAD_REQUEST_STATUS).json(e);
  }
});

app.get('/user', async (_req, res) => {
  const users = await User.getAll();

  res.status(HTTP_OK_STATUS).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(parseInt(id));
    return res.status(HTTP_OK_STATUS).json(user);
  } catch (e) {
    console.error(e.message);
    return res.status(HTTP_NOT_FOUND_STATUS).json(e);
  }
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  try {
    User.isValid(firstName, lastName, email, password);
    await User.findById(id);
    const updatedUser = await User.updateUser(
      firstName,
      lastName,
      email,
      password,
      id
    );
    return res.status(HTTP_OK_STATUS).json(updatedUser);
  } catch (e) {
    console.error(e.message);
    if (e.message !== 'Usuário não encontrado')
      return res.status(HTTP_BAD_REQUEST_STATUS).json(e);
    return res.status(HTTP_NOT_FOUND_STATUS).json(e);
  }
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
