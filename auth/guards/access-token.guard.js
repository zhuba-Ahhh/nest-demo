/* eslint-disable @typescript-eslint/no-unused-vars */ // src/auth/guards/access-token.guard.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccessTokenGuard", {
    enumerable: true,
    get: function() {
        return AccessTokenGuard;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _jwt = require("@nestjs/jwt");
const _core = require("@nestjs/core");
const _constants = require("../../constants");
const _jwtconfig = /*#__PURE__*/ _interop_require_default(require("../../config/jwt.config"));
const _publicdecorator = require("../../common/decorators/public.decorator");
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
let AccessTokenGuard = class AccessTokenGuard {
    async canActivate(context) {
        const isPublic = this.reflector.get(_publicdecorator.IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) return true;
        else {
            const request = context.switchToHttp().getRequest();
            const token = this.extractTokenFromHeader(request);
            if (!token) throw new _common.UnauthorizedException('暂无权限');
            try {
                const payload = await this.jwtService.verifyAsync(token, this.jwtConfiguration);
                request[_constants.REQUEST_USER_KEY] = payload;
            } catch (error) {
                throw new _common.UnauthorizedException('系统错误');
            }
            return true;
        }
    }
    extractTokenFromHeader(request) {
        const [_, token] = request.headers.authorization?.split(' ') ?? [];
        return token;
    }
    constructor(reflector, jwtService, jwtConfiguration){
        this.reflector = reflector;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
    }
};
AccessTokenGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(2, (0, _common.Inject)(_jwtconfig.default.KEY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _config.ConfigType === "undefined" ? Object : _config.ConfigType
    ])
], AccessTokenGuard);
