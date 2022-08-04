const connection = require('./connection');
const axios = require('axios');

const ping = () => {
  const pingResponse = { message: 'pong!' };
  return pingResponse;
};

const viaCepApiCheck = async (searchedCep) => {
  const response = await axios.get(
    `https://viacep.com.br/ws/${searchedCep}/json/`
  );
  if (response.data.erro) {
    throw { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }
  const { cep, logradouro, bairro, localidade, uf } = response.data;
  const formattedObj = { cep, logradouro, bairro, localidade, uf };
  create(cep, logradouro, bairro, localidade, uf);
  return formattedObj;
};

const findByCep = async (cep) => {
  const noSlashCep = dbCepFormat(cep);
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  const [response] = await connection.execute(query, [noSlashCep]);
  const slashedCep = slashCep(noSlashCep);
  const [cepResponse] = response;
  if (cepResponse === undefined) {
    const result = await viaCepApiCheck(cep);
    return result;
  }
  if (cepResponse !== undefined) cepResponse.cep = slashedCep;
  return cepResponse;
};

const checkCep = async (cep) => {
  const noSlashCep = dbCepFormat(cep);
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  const [response] = await connection.execute(query, [noSlashCep]);
  if (response.length > 0) {
    return false;
  }
  return true;
};

const dbCepFormat = (cep) => {
  const noSlashCep = cep.replace('-', '');
  return noSlashCep;
};

const slashCep = (cep) => {
  const cepArray = cep.split('');
  cepArray.splice(5, 0, '-');
  const slashedCep = cepArray.join('');
  return slashedCep;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const noSlashCep = dbCepFormat(cep);
  const query =
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
  await connection.execute(query, [
    noSlashCep,
    logradouro,
    bairro,
    localidade,
    uf,
  ]);
  const newCep = slashCep(noSlashCep);
  return { cep: newCep, logradouro, bairro, localidade, uf };
};

module.exports = {
  ping,
  findByCep,
  checkCep,
  create,
};
