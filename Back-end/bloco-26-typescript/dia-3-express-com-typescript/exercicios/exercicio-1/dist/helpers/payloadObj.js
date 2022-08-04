"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (body) => {
    const { username, password } = body;
    if (username === 'Geraldo' && password === '123456') {
        return {
            username,
            admin: true,
        };
    }
    return {
        username,
        admin: false,
    };
};
