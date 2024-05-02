"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const result_dto_1 = require("./result.dto");
let UnauthorizedExceptionFilter = class UnauthorizedExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = common_1.HttpStatus.UNAUTHORIZED;
        let errorMessage = null;
        const responseData = exception.getResponse();
        if (typeof responseData === 'object' &&
            responseData !== null &&
            'message' in responseData) {
            errorMessage = responseData.message;
        }
        else {
            console.log('Response is not an object or does not contain a message property');
        }
        const result = new result_dto_1.ResultDto(false, status, errorMessage);
        response.status(status).json(result);
    }
};
exports.UnauthorizedExceptionFilter = UnauthorizedExceptionFilter;
exports.UnauthorizedExceptionFilter = UnauthorizedExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.UnauthorizedException)
], UnauthorizedExceptionFilter);
//# sourceMappingURL=catch.error.js.map