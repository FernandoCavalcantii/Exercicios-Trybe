"use strict";
// ./routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
// import validationBook from '../middlewares/books.middleware';
const loginAuth_1 = __importDefault(require("../middlewares/loginAuth"));
const authToken_1 = __importDefault(require("../middlewares/authToken"));
const router = (0, express_1.Router)();
const usersController = new users_controller_1.default();
const usersSlashId = '/users/:id';
router.get('/login', loginAuth_1.default, authToken_1.default);
// router.get('/users', usersController.getAll);
// router.get(usersSlashId, usersController.getById);
// router.post('/books/', validationBook, usersController.create);
// router.put(booksSlashId, validationBook, usersController.update);
// router.delete(usersSlashId, usersController.remove);
exports.default = router;
