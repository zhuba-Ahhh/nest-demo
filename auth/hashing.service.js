// src/auth/hashing.service.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HashingService", {
    enumerable: true,
    get: function() {
        return HashingService;
    }
});
const _common = require("@nestjs/common");
const _bcrypt = require("bcrypt");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HashingService = class HashingService {
    async hash(data) {
        const salt = await (0, _bcrypt.genSalt)();
        return (0, _bcrypt.hash)(data, salt);
    }
    compare(data, encrypted) {
        return (0, _bcrypt.compare)(data, encrypted);
    }
};
HashingService = _ts_decorate([
    (0, _common.Injectable)()
], HashingService);
