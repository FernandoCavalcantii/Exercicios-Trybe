// ./index.ts

import express, { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import 'express-async-errors';

import UsersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.use(UsersRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);

    switch (name) {
        case 'BadRequestError':
            res.status(StatusCodes.BAD_REQUEST).json({ message });
            break;
        case 'UnauthorizedError':
            res.status(StatusCodes.UNAUTHORIZED).json({ message });
        case 'NotFoundError':
            res.status(StatusCodes.NOT_FOUND).json({ message });
            break;
        case 'ConflictError':
            res.status(StatusCodes.CONFLICT).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    next();
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});