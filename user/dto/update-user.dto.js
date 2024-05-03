// update-user.dto.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUserDto", {
    enumerable: true,
    get: function() {
        return UpdateUserDto;
    }
});
const _mappedtypes = require("@nestjs/mapped-types");
const _createuserdto = require("./create-user.dto");
const _swagger = require("@nestjs/swagger");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateUserDto = class UpdateUserDto extends (0, _mappedtypes.PartialType)(_createuserdto.CreateUserDto) {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户名'
    }),
    _ts_metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户性别'
    }),
    _ts_metadata("design:type", String)
], UpdateUserDto.prototype, "sex", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UpdateUserDto.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UpdateUserDto.prototype, "updateTime", void 0);