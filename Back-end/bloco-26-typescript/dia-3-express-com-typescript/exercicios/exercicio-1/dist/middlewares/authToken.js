"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jwt = require('jsonwebtoken');
const restify_errors_1 = require("restify-errors");
const secret = 'seusecretdetoken';
const authToken = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new restify_errors_1.UnauthorizedError('Missing Token.');
    }
    let decoded;
    try {
        decoded = jwt.verify(token, secret);
    }
    catch (error) {
        throw new restify_errors_1.UnauthorizedError('Invalid Signature.');
    }
    req.user = decoded.data;
    next();
});
module.exports = authToken;
