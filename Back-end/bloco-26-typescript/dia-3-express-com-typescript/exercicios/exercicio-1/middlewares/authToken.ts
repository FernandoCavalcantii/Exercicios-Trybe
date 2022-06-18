const jwt = require('jsonwebtoken');
import { NextFunction, Response } from 'express';
import { RequestCustomTypes } from '../helpers/types-interfaces';
import { UnauthorizedError } from 'restify-errors'

const secret = 'seusecretdetoken';

const authToken = async (req: RequestCustomTypes, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new UnauthorizedError('Missing Token.');
  }

  let decoded;

  try {
    decoded = jwt.verify(token, secret);
  } catch (error) {
    throw new UnauthorizedError('Invalid Signature.');
  }

  req.user = decoded.data;
  console.log(req.user);
  next();
};

export = authToken;
