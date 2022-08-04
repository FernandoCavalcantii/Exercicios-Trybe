const BooksService = require('../services/booksService');
const {
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NO_CONTENT_SUCCESS_STATUS,
  HTTP_BAD_REQUEST_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CONFLICT_STATUS,
  HTTP_UNPROCESSABLE_ENTITY_STATUS,
  HTTP_INTERNAL_SERVER_ERROR,
} = require('../helpers/constants');

// booksRouter.post('/', async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     const newProduct = await BooksService.create(name, description);

//     return res.status(201).json(newProduct);
//   } catch (e) {
//     console.error(e.message);

//     return res.status(500).send('Deu ruim');
//   }
// });

const getAll = async (req, res) => {
  if (req.query.author) {
    const { author } = req.query;
    const books = await BooksService.getByAuthor(author);
    return res.status(HTTP_OK_STATUS).json(books);
  }
  const books = await BooksService.getAll();
  return res.status(HTTP_OK_STATUS).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  return res.status(HTTP_OK_STATUS).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const newBook = await BooksService.create(
    title,
    author,
    pageQuantity,
    publisher
  );
  return res.status(HTTP_CREATED_STATUS).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  await BooksService.update(id, title, author, pageQuantity, publisher);
  return res.status(HTTP_OK_STATUS).json({ message: 'Book updated!' });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  await BooksService.deleteBook(id);
  return res.status(200).json({ message: `Book ${id} removido com sucesso` });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
};
