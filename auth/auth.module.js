// src/auth/auth.module.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthModule", {
    enumerable: true,
    get: function() {
        return AuthModule;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _userentity = require("../users/entities/user.entity");
const _typeorm = require("@nestjs/typeorm");
const _jwtconfig = /*#__PURE__*/ _interop_require_default(require("../config/jwt.config"));
const _authcontroller = require("./auth.controller");
const _authservice = require("./auth.service");
const _hashingservice = require("./hashing.service");
const _core = require("@nestjs/core");
const _accesstokenguard = require("./guards/access-token.guard");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthModule = class AuthModule {
};
AuthModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _userentity.Users
            ]),
            _config.ConfigModule.forFeature(_jwtconfig.default),
            _jwt.JwtModule.registerAsync(_jwtconfig.default.asProvider())
        ],
        controllers: [
            _authcontroller.AuthController
        ],
        providers: [
            _authservice.AuthService,
            _hashingservice.HashingService,
            {
                provide: _core.APP_GUARD,
                useClass: _accesstokenguard.AccessTokenGuard
            }
        ]
    })
], AuthModule);
