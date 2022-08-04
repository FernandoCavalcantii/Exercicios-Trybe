const { adminFalse } = require('../helpers/errorFunctions');

module.exports = (req, _res, next) => {
  if (!req.user.admin) adminFalse();
  next();
};
