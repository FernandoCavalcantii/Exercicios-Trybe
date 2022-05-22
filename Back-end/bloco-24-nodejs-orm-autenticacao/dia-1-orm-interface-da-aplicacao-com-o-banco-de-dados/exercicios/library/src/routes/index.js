const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./books/index');

const router = express.Router();

router.use(bodyParser.json());
router.use('/books', booksRouter);

module.exports = router;
