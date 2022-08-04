const Cep = require('../models/cepModel');

const ping = async () => {
  const pingResponse = await Cep.ping();
  return pingResponse;
};

const validateCep = (cep) => {
  const regex = /\d{5}-?\d{3}/;
  const result = regex.test(cep);
  if (!result) {
    return false;
  }
  return true;
};

const validateFields = (cep, logradouro, bairro, localidade, uf) => {
  if (cep === undefined || cep.length === 0) {
    const errorObj = {
      error: { code: 'invalidData', message: 'O campo "CEP" é obrigatório' },
    };
    return errorObj;
  }
  if (logradouro === undefined || logradouro.length === 0) {
    const errorObj = {
      error: {
        code: 'invalidData',
        message: 'O campo "Logradouro" é obrigatório',
      },
    };
    return errorObj;
  }
  if (bairro === undefined || bairro.length === 0) {
    const errorObj = {
      error: { code: 'invalidData', message: 'O campo "Bairro" é obrigatório' },
    };
    return errorObj;
  }
  if (localidade === undefined || localidade.length === 0) {
    const errorObj = {
      error: {
        code: 'invalidData',
        message: 'O campo "Localidade" é obrigatório',
      },
    };
    return errorObj;
  }
  if (uf === undefined || uf.length === 0) {
    const errorObj = {
      error: { code: 'invalidData', message: 'O campo "UF" é obrigatório' },
    };
    return errorObj;
  }
  return true;
};

const findByCep = async (cep) => {
  if (!validateCep(cep)) {
    const errorObj = {
      error: { code: 'invalidData', message: 'CEP inválido' },
    };
    throw errorObj;
  }
  const cepResponse = await Cep.findByCep(cep);
  if (cepResponse === undefined || cepResponse.length === 0) {
    const errorObj = {
      error: { code: 'notFound', message: 'CEP não encontrado' },
    };
    throw errorObj;
  }
  return cepResponse;
};

const insertCep = async (cep, logradouro, bairro, localidade, uf) => {
  const fieldsValidation = validateFields(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );
  if (fieldsValidation.error) {
    throw fieldsValidation;
  }
  if (!validateCep(cep)) {
    const errorObj = {
      error: { code: 'invalidData', message: 'CEP inválido' },
    };
    throw errorObj;
  }
  const checkCep = await Cep.checkCep(cep);
  if (!checkCep) {
    const errorObj = {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
    throw errorObj;
  }
  const newCep = await Cep.create(cep, logradouro, bairro, localidade, uf);
  return newCep;
};

module.exports = {
  ping,
  findByCep,
  insertCep,
};
