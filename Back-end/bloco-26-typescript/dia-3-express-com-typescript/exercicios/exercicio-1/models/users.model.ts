// ./models/book.model.ts

import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../helpers/types-interfaces';

export default class UsersModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<User[]> {
        const result = await this.connection
            .execute('SELECT * FROM Users');
        const [rows] = result;
        return rows as User[];
    }

    public async getById(id: number): Promise<User> {
        const result = await this.connection
            .execute('SELECT * FROM Users WHERE id=?', [id]);
        const [rows] = result;
        const [book] = rows as User[];
        return book;
    }

    // public async create(book: User): Promise<User> {
    //     const { title, price, author, isbn } = book;
    //     const result = await this.connection.execute<ResultSetHeader>(
    //         'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
    //         [title, price, author, isbn],
    //     );
    //     const [dataInserted] = result;
    //     const { insertId } = dataInserted;
    //     return { id: insertId, ...book };
    // }

    // public async update(id: number, book: User) {
    //     const { title, price, author, isbn } = book;
    //     await this.connection.execute(
    //         'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
    //         [title, price, author, isbn, id]
    //     );
    // }

    // public async remove(id: number) {
    //     await this.connection.execute(
    //         'DELETE FROM books WHERE id=?',
    //         [id],
    //     );
    // }
}