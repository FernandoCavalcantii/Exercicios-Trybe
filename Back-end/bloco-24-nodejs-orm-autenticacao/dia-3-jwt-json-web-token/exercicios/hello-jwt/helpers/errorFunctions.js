const missingToken = () => {
  throw { error: { code: 'unauthorized', message: 'Token is required' } };
};

const invalidSignature = () => {
  throw { error: { code: 'unauthorized', message: 'Invalid signature' } };
};

const adminFalse = () => {
  throw { error: { code: 'forbidden', message: 'Restricted access' } };
};

const missingUsernamePassword = () => {
  throw {
    error: {
      code: 'invalidData',
      message: 'Username and password are required',
    },
  };
};

const usernamePasswordLength = () => {
  throw {
    error: {
      code: 'unauthorized',
      message: 'Username and password must have at least 5 characters',
    },
  };
};

module.exports = {
  missingToken,
  invalidSignature,
  adminFalse,
  missingUsernamePassword,
  usernamePasswordLength,
};
