const {
  HTTP_OK_STATUS,
  // HTTP_CREATED_STATUS,
  // HTTP_NO_CONTENT_SUCCESS_STATUS,
  // HTTP_BAD_REQUEST_STATUS,
  // HTTP_NOT_FOUND_STATUS,
  // HTTP_CONFLICT_STATUS,
  // HTTP_UNPROCESSABLE_ENTITY_STATUS,
  // HTTP_INTERNAL_SERVER_ERROR,
} = require('../helpers/constants');

module.exports = async (req, res) => {
  const { user } = req;
  res.status(HTTP_OK_STATUS).json(user);
};
