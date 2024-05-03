/* eslint-disable @typescript-eslint/no-unused-vars */ // src/auth/auth.controller.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _signindto = require("./dto/sign-in.dto");
const _publicdecorator = require("../common/decorators/public.decorator");
const _authservice = require("./auth.service");
const _signupdto = require("./dto/sign-up.dto");
const _resultdto = require("../utils/result.dto");
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
let AuthController = class AuthController {
    async signUp(signUpDto) {
        try {
            const result = await this.authService.signUp(signUpDto);
            if (result) {
                return new _resultdto.ResultDto(true, _common.HttpStatus.CREATED, '用户注册成功', result);
            } else {
                // 如果注册失败，返回相应的错误码和消息
                return new _resultdto.ResultDto(false, _common.HttpStatus.BAD_REQUEST, '用户注册失败');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
            throw new _common.HttpException(new _resultdto.ResultDto(false, _common.HttpStatus.INTERNAL_SERVER_ERROR, error.message), _common.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async signIn(signInDto) {
        try {
            const result = await this.authService.signIn(signInDto);
            if (result) {
                return new _resultdto.ResultDto(true, _common.HttpStatus.OK, '用户登录成功', result);
            } else {
                // 如果登录失败，返回相应的错误码和消息
                return new _resultdto.ResultDto(false, _common.HttpStatus.BAD_REQUEST, '用户登录失败');
            }
        } catch (error) {
            throw new _common.HttpException(new _resultdto.ResultDto(false, _common.HttpStatus.INTERNAL_SERVER_ERROR, error.message), _common.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    constructor(authService){
        this.authService = authService;
    }
};
_ts_decorate([
    (0, _publicdecorator.Public)(),
    (0, _common.Post)('sign-up'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _signupdto.SignUpDto === "undefined" ? Object : _signupdto.SignUpDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
_ts_decorate([
    (0, _publicdecorator.Public)(),
    (0, _common.Post)('sign-in'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _signindto.SignInDto === "undefined" ? Object : _signindto.SignInDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);
