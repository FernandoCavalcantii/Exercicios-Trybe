const bookNotFound = () => {
  throw { error: { code: 'notFound', message: 'Book not found' } };
};

const authorNotFound = () => {
  throw { error: { code: 'notFound', message: 'Author not found' } };
};

module.exports = { bookNotFound, authorNotFound };
