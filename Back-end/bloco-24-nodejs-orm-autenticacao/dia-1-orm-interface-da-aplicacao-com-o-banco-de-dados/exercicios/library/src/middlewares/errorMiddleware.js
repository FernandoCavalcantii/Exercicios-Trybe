const {
  HTTP_BAD_REQUEST_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CONFLICT_STATUS,
  HTTP_UNPROCESSABLE_ENTITY_STATUS,
  HTTP_INTERNAL_SERVER_ERROR,
} = require('../helpers/constants');

const invalidDataError = (err, res) =>
  res.status(HTTP_BAD_REQUEST_STATUS).json({ message: err.error.message });

const notFoundError = (err, res) =>
  res.status(HTTP_NOT_FOUND_STATUS).json({ message: err.error.message });

const conflictError = (err, res) =>
  res.status(HTTP_CONFLICT_STATUS).json({ message: err.error.message });

const unprocessableEntityError = (err, res) =>
  res
    .status(HTTP_UNPROCESSABLE_ENTITY_STATUS)
    .json({ message: err.error.message });

const internalServerError = (err, res) =>
  res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: err.message });

const errorMiddlewareSwitch = (err, res) => {
  switch (err.error.code) {
    case 'invalidData':
      invalidDataError(err, res);
      break;
    case 'notFound':
      notFoundError(err, res);
      break;
    case 'conflict':
      conflictError(err, res);
      break;
    case 'unprocessableEntity':
      unprocessableEntityError(err, res);
      break;
    default:
      internalServerError(err, res);
  }
};

const errorMiddleware = (err, _req, res, _next) => {
  if (err.error) {
    errorMiddlewareSwitch(err, res);
  }
};

module.exports = {
  errorMiddleware,
};
