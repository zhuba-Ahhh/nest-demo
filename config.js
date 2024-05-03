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
const _default = ()=>({
        app: {
            name: 'Test',
            isDev: process.env.NODE_ENV == 'development'
        },
        database: {
            url: 'localhost'
        }
    });
