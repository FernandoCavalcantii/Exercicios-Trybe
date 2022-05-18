const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());

const {
  PORT,
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_BAD_REQUEST_STATUS,
} = require("./helpers/constants");

const Author = require("./models/Author");

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(HTTP_OK_STATUS).json(authors);
});

app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author)
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: "Not found" });

  res.status(HTTP_OK_STATUS).json(author);
});

const Books = require("./models/Books");

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByAuthorId(id);

  if (!book)
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: "Not found" });

  res.status(HTTP_OK_STATUS).json(book);
});

app.post("/authors", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: "Invalid data" });
  }

  await Author.create(first_name, middle_name, last_name);

  res
    .status(HTTP_CREATED_STATUS)
    .json({ message: "Author created successfuly! " });
});

app.post("/books", async (req, res) => {
  const { title, author_id } = req.body;
  const validation = await Books.validateBooks(title, author_id);
  console.log(validation);
  if (!validation)
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: "Invalid data" });

  await Books.createBook(title, author_id);

  return res
    .status(HTTP_CREATED_STATUS)
    .json({ message: "Author created successfuly! " });
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
