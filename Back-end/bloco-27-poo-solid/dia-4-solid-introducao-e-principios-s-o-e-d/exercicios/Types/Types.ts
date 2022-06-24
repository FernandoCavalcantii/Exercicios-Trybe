// import { Request, Response } from 'express';

export type IPlant = {
    id: string,
    breed: string,
    needsSun: boolean,
    origin: string,
    size: number,
    specialCare?: { waterFrequency: number },
}

// export type ErrorType = {
//     code: number,
//     message: string,
// }

// export type ErrorMiddlewareResponse = {
//     (err: ErrorObj, _req: Request, res: Response): Response<any, Record<string, any>>
// }