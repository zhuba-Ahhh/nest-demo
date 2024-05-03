/* eslint-disable @typescript-eslint/no-unused-vars */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductsController", {
    enumerable: true,
    get: function() {
        return ProductsController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _productsservice = require("./products.service");
const _productdto = require("./dto/product.dto");
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
let ProductsController = class ProductsController {
    // 通过数据库查询产品list
    getList() {
        return this.productsService.getList();
    }
    getProductId(query) {
        const id = query.id;
        return this.productsService.getProductById(Number(id));
    }
    addProduct(body) {
        return this.productsService.addProduct(body);
    }
    deleteProduct(id) {
        return this.productsService.delProuct(Number(id));
    }
    constructor(productsService){
        this.productsService = productsService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询产品list'
    }),
    (0, _common.Get)('list'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ProductsController.prototype, "getList", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过id查询产品'
    }),
    (0, _swagger.ApiParam)({
        name: 'id',
        description: '要查询的产品的ID',
        type: 'number'
    }),
    (0, _common.Get)('getProductId'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _productdto.ProductsIdDto === "undefined" ? Object : _productdto.ProductsIdDto
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ProductsController.prototype, "getProductId", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增产品'
    }),
    (0, _common.Post)('addProduct'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _productdto.ProductsDto === "undefined" ? Object : _productdto.ProductsDto
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ProductsController.prototype, "addProduct", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过id删除产品'
    }),
    (0, _swagger.ApiParam)({
        name: 'id',
        description: '要删除的产品的ID',
        type: 'number'
    }),
    (0, _common.Get)('deleteProduct'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", typeof Promise === "undefined" ? Object : Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = _ts_decorate([
    (0, _swagger.ApiTags)('products'),
    (0, _common.Controller)('products'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _productsservice.ProductsService === "undefined" ? Object : _productsservice.ProductsService
    ])
], ProductsController);
