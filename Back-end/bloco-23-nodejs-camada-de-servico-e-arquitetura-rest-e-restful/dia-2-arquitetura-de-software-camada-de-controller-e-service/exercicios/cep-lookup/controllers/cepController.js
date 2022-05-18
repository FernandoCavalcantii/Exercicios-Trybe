const Cep = require('../services/cepService');

const {
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  //   HTTP_NOT_FOUND_STATUS,
  //   HTTP_BAD_REQUEST_STATUS,
} = require('../helpers/constants');

const ping = async (_req, res) => {
  const pingResponse = await Cep.ping();
  return res.status(HTTP_OK_STATUS).json(pingResponse);
};

const findByCep = async (req, res) => {
  const { cep } = req.params;
  const cepResponse = await Cep.findByCep(cep);
  return res.status(HTTP_OK_STATUS).json(cepResponse);
};

const insertCep = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newCep = await Cep.insertCep(cep, logradouro, bairro, localidade, uf);
  return res.status(HTTP_CREATED_STATUS).json(newCep);
};

module.exports = {
  ping,
  findByCep,
  insertCep,
};
