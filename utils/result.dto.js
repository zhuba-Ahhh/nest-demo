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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResultDto {
    constructor(success, code, message, data) {
        this.success = success;
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.ResultDto = ResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '请求是否成功', example: true }),
    __metadata("design:type", Boolean)
], ResultDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '返回码', example: 200 }),
    __metadata("design:type", Number)
], ResultDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '返回消息', example: '操作成功' }),
    __metadata("design:type", String)
], ResultDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '返回数据', example: {} }),
    __metadata("design:type", Object)
], ResultDto.prototype, "data", void 0);
//# sourceMappingURL=result.dto.js.map