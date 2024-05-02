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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const product_dto_1 = require("./dto/product.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
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
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '查询产品list' }),
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '通过id查询产品' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '要查询的产品的ID', type: 'number' }),
    (0, common_1.Get)('getProductId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductsIdDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增产品' }),
    (0, common_1.Post)('addProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductsDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '通过id删除产品' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: '要删除的产品的ID', type: 'number' }),
    (0, common_1.Get)('deleteProduct'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map