// const {
//   missingUsernamePassword,
//   usernamePasswordLength,
// } = require('../helpers/errorFunctions');

import { BadRequestError } from 'restify-errors';
import { LoginInfo } from '../helpers/types-interfaces';

module.exports = (body: LoginInfo) => {
  const { username, password } = body;
  if (!username || !password) {
    throw new BadRequestError('Username and password required.');
  }

  if (username.length < 3 || (password.length < 6 && password.length > 12)) {
    throw new BadRequestError(
      'Username must have at least 3 characters and password must have between 6 to 12 characters.'
    );
  }
};
