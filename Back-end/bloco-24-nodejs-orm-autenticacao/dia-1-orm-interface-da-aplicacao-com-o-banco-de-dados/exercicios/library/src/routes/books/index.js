const express = require('express');
const rescue = require('express-rescue');

const booksRouter = express.Router();

const {
  getAll,
  getById,
  create,
  update,
  deleteBook,
} = require('../../controllers/booksController');

const { errorMiddleware } = require('../../middlewares/errorMiddleware');

booksRouter.get('/', rescue(getAll));

booksRouter.get('/:id', rescue(getById));

booksRouter.post('/', rescue(create));

booksRouter.put('/:id', rescue(update));

booksRouter.delete('/:id', rescue(deleteBook));

booksRouter.use(errorMiddleware);

module.exports = booksRouter;
