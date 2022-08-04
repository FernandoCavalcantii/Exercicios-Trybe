// ./controllers/books.controller.ts

import { Response } from 'express';
import { RequestCustomTypes } from '../helpers/types-interfaces';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

class UsersController {
    constructor(private usersService = new UsersService()) { }

    public login = async (req: RequestCustomTypes, res: Response) => {
        const { token } = req;
        res.status(StatusCodes.OK).json({ token });
    };

    public getAll = async (_req: RequestCustomTypes, res: Response) => {
        const users = await this.usersService.getAll();
        res.status(StatusCodes.OK).json(users);
    };

    public getById = async (req: RequestCustomTypes, res: Response) => {
        const id = parseInt(req.params.id);
        const user = await this.usersService.getById(id);

        res.status(StatusCodes.OK).json(user);
    }

    // public create = async (req: Request, res: Response) => {
    //     const book = req.body;

    //     const bookCreated = await this.bookService.create(book);
    //     res.status(StatusCodes.CREATED).json(bookCreated);
    // };

    // public update = async (req: Request, res: Response) => {
    //     const id = Number(req.params.id);
    //     const book = req.body;
    //     await this.bookService.update(id, book);

    //     res.status(StatusCodes.NO_CONTENT).end();
    // };

    // public remove = async (req: Request, res: Response) => {
    //     const id = Number(req.params.id);
    //     await this.bookService.remove(id);

    //     res.status(StatusCodes.OK).json({ message: 'Book deleted successfully' });
    // };
}

export default UsersController;