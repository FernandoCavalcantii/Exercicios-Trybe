const express = require('express');
const bodyParser = require('body-parser');
const employeesRouter = require('./employees/index');
const usersBooks = require('./usersBooks/index');

const router = express.Router();

router.use(bodyParser.json());
router.use('/employees', employeesRouter);
router.use('/usersbooks/', usersBooks);

module.exports = router;
