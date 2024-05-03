/* eslint-disable @typescript-eslint/no-unused-vars */ // src/auth/auth.service.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _config = require("@nestjs/config");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _userentity = require("../users/entities/user.entity");
const _jwtconfig = /*#__PURE__*/ _interop_require_default(require("../config/jwt.config"));
const _hashingservice = require("./hashing.service");
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
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthService = class AuthService {
    async generateTokens(user) {
        const token = await this.signToken(user.id, {
            name: user.name
        });
        return {
            token
        };
    }
    async signToken(userId, payload) {
        return await this.jwtService.signAsync({
            sub: userId,
            ...payload
        }, {
            secret: this.jwtConfiguration.secret,
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            expiresIn: this.jwtConfiguration.accessTokenTtl
        });
    }
    async signUp(signUpDto) {
        const { name, password } = signUpDto;
        const existingUser = await this.userRepository.findOne({
            where: [
                {
                    name
                }
            ]
        });
        if (existingUser) throw new _common.UnauthorizedException('用户名已重复');
        const hashedPassword = await this.hashingService.hash(password);
        const user = this.userRepository.create({
            ...signUpDto,
            password: hashedPassword
        });
        return this.userRepository.save(user);
    }
    async signIn(signInDto) {
        // TODO sign in
        const { name, password } = signInDto;
        const user = await this.userRepository.findOne({
            where: {
                name
            }
        });
        if (!user) throw new _common.UnauthorizedException('用户不存在');
        const isEqual = await this.hashingService.compare(password, user.password);
        if (!isEqual) throw new _common.UnauthorizedException('密码错误');
        return this.generateTokens(user);
    }
    constructor(userRepository, jwtService, jwtConfiguration, hashingService){
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.hashingService = hashingService;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_userentity.Users)),
    _ts_param(2, (0, _common.Inject)(_jwtconfig.default.KEY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _config.ConfigType === "undefined" ? Object : _config.ConfigType,
        typeof _hashingservice.HashingService === "undefined" ? Object : _hashingservice.HashingService
    ])
], AuthService);
