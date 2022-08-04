const jwt = require('jsonwebtoken');
const { missingToken, invalidSignature } = require('../helpers/errorFunctions');

const secret = 'seusecretdetoken';

const authToken = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    missingToken();
  }

  let decoded;

  try {
    decoded = jwt.verify(token, secret);
  } catch (error) {
    throw invalidSignature();
  }

  req.user = decoded.data;

  next();
};

module.exports = authToken;
