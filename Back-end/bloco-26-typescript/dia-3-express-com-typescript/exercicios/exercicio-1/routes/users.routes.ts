// ./routes/books.routes.ts

import { Router } from 'express';
import UsersController from '../controllers/users.controller';
// import validationBook from '../middlewares/books.middleware';
import login from '../middlewares/loginAuth';
import authToken from '../middlewares/authToken';

const router = Router();

const usersController = new UsersController();

const usersSlashId = '/users/:id';

router.post('/login', login as any, usersController.login as any);
router.get('/users', authToken as any, usersController.getAll as any);
router.get(usersSlashId, authToken as any, usersController.getById as any);
// router.post('/books/', validationBook, usersController.create);
// router.put(booksSlashId, validationBook, usersController.update);
// router.delete(usersSlashId, usersController.remove);

export default router;