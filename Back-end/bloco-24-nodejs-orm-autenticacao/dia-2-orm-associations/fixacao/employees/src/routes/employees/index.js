const express = require('express');
// const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const employeesRouter = express.Router();

const {
  getAll,
  getById,
  create,
  // update,
  // deleteBook,
} = require('../../controllers/employees.controller');

// const { errorMiddleware } = require('../../middlewares/errorMiddleware');

employeesRouter.use(bodyParser.json());

employeesRouter.get('/', getAll);

employeesRouter.get('/:id', getById);

employeesRouter.get('/:id', getById);

employeesRouter.post('/', create);

// employeesRouter.put('/:id', rescue(update));

// employeesRouter.delete('/:id', rescue(deleteBook));

// employeesRouter.use(errorMiddleware);

module.exports = employeesRouter;
