import { LoginInfo } from './types-interfaces'

module.exports = (body: LoginInfo) => {
  const { username, password } = body;
  if (username === 'Geraldo' && password === '123456') {
    return {
      username,
      admin: true,
    };
  }
  return {
    username,
    admin: false,
  };
};
