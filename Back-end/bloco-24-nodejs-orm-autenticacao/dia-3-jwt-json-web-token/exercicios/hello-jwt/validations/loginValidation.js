const {
  missingUsernamePassword,
  usernamePasswordLength,
} = require('../helpers/errorFunctions');
module.exports = (body) => {
  const { username, password } = body;
  if (!username || !password) {
    missingUsernamePassword();
  }

  if (username.length < 5 || password.length < 5) {
    usernamePasswordLength();
  }
};
