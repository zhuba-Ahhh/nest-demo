"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ProductsDto: function() {
        return ProductsDto;
    },
    ProductsIdDto: function() {
        return ProductsIdDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ProductsDto = class ProductsDto {
};
_ts_decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _swagger.ApiProperty)({
        description: 'id'
    }),
    _ts_metadata("design:type", Number)
], ProductsDto.prototype, "id", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)({
        message: '用户名必填'
    }),
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)({
        description: '用户名'
    }),
    _ts_metadata("design:type", String)
], ProductsDto.prototype, "name", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)({
        message: '类型必填'
    }),
    (0, _swagger.ApiProperty)({
        description: '类型'
    }),
    _ts_metadata("design:type", String)
], ProductsDto.prototype, "type", void 0);
let ProductsIdDto = class ProductsIdDto {
};
_ts_decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _swagger.ApiProperty)({
        description: 'id'
    }),
    _ts_metadata("design:type", Number)
], ProductsIdDto.prototype, "id", void 0);

//# sourceMappingURL=product.dto.js.map