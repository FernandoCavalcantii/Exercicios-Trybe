const connection = require("./connection");

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    "SELECT id, title, author_id FROM model_example.books WHERE id = ?;",
    [id]
  );
  if (books.length === 0) return null;

  return books[0];
};

const Author = require("./Author");

const validateBooks = async (title, author_id) => {
  const authors = await Author.getAll();
  const searchAuthorId = authors.find((a) => a.id === author_id);
  if (
    !title ||
    title.length < 3 ||
    !author_id ||
    searchAuthorId === undefined
  ) {
    return false;
  }
  return true;
};

const createBook = async (title, author_id) => {
  const query =
    "INSERT INTO model_example.books (title, author_id) VALUES (?,?)";
  connection.execute(query, [title, author_id]);
};

module.exports = {
  getByAuthorId,
  validateBooks,
  createBook,
};
