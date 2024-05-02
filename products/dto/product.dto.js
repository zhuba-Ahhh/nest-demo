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
exports.ProductsIdDto = exports.ProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ProductsDto {
}
exports.ProductsDto = ProductsDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    __metadata("design:type", Number)
], ProductsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '用户名必填' }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '用户名' }),
    __metadata("design:type", String)
], ProductsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: '类型必填' }),
    (0, swagger_1.ApiProperty)({ description: '类型' }),
    __metadata("design:type", String)
], ProductsDto.prototype, "type", void 0);
class ProductsIdDto {
}
exports.ProductsIdDto = ProductsIdDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    __metadata("design:type", Number)
], ProductsIdDto.prototype, "id", void 0);
//# sourceMappingURL=product.dto.js.map