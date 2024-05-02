"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_config_1 = require("../config/jwt.config");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const hashing_service_1 = require("./hashing.service");
const core_1 = require("@nestjs/core");
const access_token_guard_1 = require("./guards/access-token.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.Users]),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            hashing_service_1.HashingService,
            {
                provide: core_1.APP_GUARD,
                useClass: access_token_guard_1.AccessTokenGuard,
            },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map