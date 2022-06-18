"use strict";
// const {
//   missingUsernamePassword,
//   usernamePasswordLength,
// } = require('../helpers/errorFunctions');
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
module.exports = (body) => {
    const { username, password } = body;
    if (!username || !password) {
        throw new restify_errors_1.BadRequestError('Username and password required.');
    }
    if (username.length > 2 || (password.length < 5 && password.length < 13)) {
        throw new restify_errors_1.BadRequestError('Username must have at least 3 characters and password must have between 6 to 12 characters.');
    }
};
