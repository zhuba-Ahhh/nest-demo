/* eslint-disable @typescript-eslint/no-unused-vars */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UnauthorizedExceptionFilter", {
    enumerable: true,
    get: function() {
        return UnauthorizedExceptionFilter;
    }
});
const _common = require("@nestjs/common");
const _resultdto = require("./result.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let UnauthorizedExceptionFilter = class UnauthorizedExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = _common.HttpStatus.UNAUTHORIZED;
        let errorMessage = null;
        const responseData = exception.getResponse();
        if (typeof responseData === 'object' && responseData !== null && 'message' in responseData) {
            // 获取 message 属性的值
            errorMessage = responseData.message;
        } else {
            // 处理 response 不是对象或没有 message 属性的情况
            console.log('Response is not an object or does not contain a message property');
        }
        const result = new _resultdto.ResultDto(false, status, errorMessage);
        response.status(status).json(result);
    }
};
UnauthorizedExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_common.UnauthorizedException)
], UnauthorizedExceptionFilter);

//# sourceMappingURL=catch.error.js.map