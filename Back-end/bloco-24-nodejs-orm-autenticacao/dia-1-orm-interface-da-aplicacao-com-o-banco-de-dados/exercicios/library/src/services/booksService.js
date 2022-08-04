const { Book } = require('../models');
// o Book é referente a linha 3 de ../models/books.js
const {
  bookNotFound,
  authorNotFound,
} = require('../middlewares/errorFunctions');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
    attributes: [
      'id',
      'title',
      'author',
      'publisher',
      ['page_quantity', 'pageQuantity'],
      'createdAt',
      'updatedAt',
    ],
  });
  return books;
};

const getByAuthor = async (author) => {
  const book = await Book.findOne({ where: { author } });
  if (book === null) authorNotFound();

  return book;
};

const getById = async (id) => {
  const book = await Book.findByPk(id, {
    attributes: [
      'id',
      'title',
      'author',
      'publisher',
      ['page_quantity', 'pageQuantity'],
      'createdAt',
      'updatedAt',
    ],
  });
  if (book === null) bookNotFound();
  return book;
};

const create = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({
    title,
    author,
    page_quantity: pageQuantity,
    publisher,
  });
  return newBook;
};

const update = async (id, title, author, pageQuantity, publisher) => {
  const updatedBook = await Book.update(
    { title, author, page_quantity: pageQuantity, publisher },
    {
      where: {
        id,
      },
    }
  );
  if (updatedBook[0] === 0) bookNotFound();
};

const deleteBook = async (id) => {
  await Book.destroy({
    where: { id },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
  getByAuthor,
};
