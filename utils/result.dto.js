// result.dto.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResultDto", {
    enumerable: true,
    get: function() {
        return ResultDto;
    }
});
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
let ResultDto = class ResultDto {
    constructor(success, code, message, data){
        this.success = success;
        this.code = code;
        this.message = message;
        this.data = data;
    }
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求是否成功',
        example: true
    }),
    _ts_metadata("design:type", Boolean)
], ResultDto.prototype, "success", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '返回码',
        example: 200
    }),
    _ts_metadata("design:type", Number)
], ResultDto.prototype, "code", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '返回消息',
        example: '操作成功'
    }),
    _ts_metadata("design:type", String)
], ResultDto.prototype, "message", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '返回数据',
        example: {}
    }),
    _ts_metadata("design:type", Object)
], ResultDto.prototype, "data", void 0);
