/* eslint-disable indent */
const bodyParser = require('body-parser');
const express = require('express');
const rescue = require('express-rescue');
const Cep = require('./controllers/cepController');
const {
  PORT,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_BAD_REQUEST_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CONFLICT_STATUS,
} = require('./helpers/constants');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// const User = require('./models/userModel');

app.get('/ping', rescue(Cep.ping));

app.get('/cep/:cep', rescue(Cep.findByCep));

app.post('/cep', rescue(Cep.insertCep));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, next) => {
  if (err.error) {
    switch (err.error.code) {
      case 'invalidData':
        res
          .status(HTTP_BAD_REQUEST_STATUS)
          .json({ message: err.error.message });
        break;
      case 'notFound':
        res.status(HTTP_NOT_FOUND_STATUS).json({ message: err.error.message });
        break;
      case 'alreadyExists':
        res.status(HTTP_CONFLICT_STATUS).json({ message: err.error.message });
        break;
      default:
        return res
          .status(HTTP_INTERNAL_SERVER_ERROR)
          .json({ message: err.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
