"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const env = {
    TYPE: 'mysql',
    DB_HOST: 'localhost',
    DB_PORT: 3306,
    DB_USERNAME: 'root',
    DB_PASSWORD: 'ywj88888888',
    DB_DATABASE: 'test',
    JWT_SECRET: 'secret',
    JWT_TOKEN_AUDIENCE: 'localhost:3000',
    JWT_TOKEN_ISSUER: 'localhost:3000',
    JWT_ACCESS_TOKEN_TTL: 3600
};
const _default = env;
