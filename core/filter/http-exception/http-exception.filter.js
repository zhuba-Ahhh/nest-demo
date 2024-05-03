"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpExceptionFilter", {
    enumerable: true,
    get: function() {
        return HttpExceptionFilter;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp(); // 获取请求上下文
        const response = ctx.getResponse(); // 获取请求上下文中的 response对象
        const status = exception.getStatus(); // 获取异常状态码
        // 设置错误信息
        const message = exception.message ? exception.message : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
        const errorResponse = {
            data: {},
            message: message,
            code: -1
        };
        // 设置返回的状态码， 请求头，发送错误信息
        response.status(status);
        response.header('Content-Type', 'application/json; charset=utf-8');
        response.send(errorResponse);
    }
};
HttpExceptionFilter = _ts_decorate([
    (0, _common.Catch)(_common.HttpException)
], HttpExceptionFilter);
