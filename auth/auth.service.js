"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_config_1 = require("../config/jwt.config");
const hashing_service_1 = require("./hashing.service");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, jwtConfiguration, hashingService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.hashingService = hashingService;
    }
    async generateTokens(user) {
        const token = await this.signToken(user.id, {
            name: user.name,
        });
        return { token };
    }
    async signToken(userId, payload) {
        return await this.jwtService.signAsync({
            sub: userId,
            ...payload,
        }, {
            secret: this.jwtConfiguration.secret,
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            expiresIn: this.jwtConfiguration.accessTokenTtl,
        });
    }
    async signUp(signUpDto) {
        const { name, password } = signUpDto;
        const existingUser = await this.userRepository.findOne({
            where: [{ name }],
        });
        if (existingUser)
            throw new common_2.UnauthorizedException('用户名已重复');
        const hashedPassword = await this.hashingService.hash(password);
        const user = this.userRepository.create({
            ...signUpDto,
            password: hashedPassword,
        });
        return this.userRepository.save(user);
    }
    async signIn(signInDto) {
        const { name, password } = signInDto;
        const user = await this.userRepository.findOne({ where: { name } });
        if (!user)
            throw new common_2.UnauthorizedException('用户不存在');
        const isEqual = await this.hashingService.compare(password, user.password);
        if (!isEqual)
            throw new common_2.UnauthorizedException('密码错误');
        return this.generateTokens(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __param(2, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService, void 0, hashing_service_1.HashingService])
], AuthService);
//# sourceMappingURL=auth.service.js.map