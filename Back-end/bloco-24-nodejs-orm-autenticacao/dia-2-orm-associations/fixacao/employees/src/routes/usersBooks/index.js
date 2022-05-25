const express = require('express');
// const rescue = require('express-rescue');

const usersBooksRouter = express.Router();

const {
  // getAll,
  getById,
  // create,
  // update,
  // deleteBook,
} = require('../../controllers/usersBooks.controller');

// const { errorMiddleware } = require('../../middlewares/errorMiddleware');

// usersBooksRouter.get('/', getAll);

usersBooksRouter.get('/:id', getById);

// usersBooksRouter.post('/', rescue(create));

// usersBooksRouter.put('/:id', rescue(update));

// usersBooksRouter.delete('/:id', rescue(deleteBook));

// usersBooksRouter.use(errorMiddleware);

module.exports = usersBooksRouter;
