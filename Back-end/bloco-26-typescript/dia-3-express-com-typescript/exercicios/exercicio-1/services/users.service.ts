// ./services/books.service.ts

import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { User } from '../helpers/types-interfaces';
import { NotFoundError } from 'restify-errors';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);

    if (!user) {
      throw new NotFoundError('Book not found!');
    }

    return user;
  }

  // public create(book: Book): Promise<Book> {
  //   return this.model.create(book);
  // }

  // public async update(id: number, book: Book): Promise<void> {
  //   const bookFound = await this.model.getById(id);
  //   if (!bookFound) {
  //     throw new NotFoundError('NotFoundError');
  //   }

  //   return this.model.update(id, book);
  // }

  // public async remove(id: number): Promise<void> {
  //   const bookFound = await this.model.getById(id);
  //   if (!bookFound) {
  //     throw new NotFoundError('NotFoundError');
  //   }

  //   this.model.remove(id);
  // }
}

export default UsersService;