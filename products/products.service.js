// products.service.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductsService", {
    enumerable: true,
    get: function() {
        return ProductsService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _productsentity = require("./products.entity");
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
let ProductsService = class ProductsService {
    // 查询数据库产品数据
    async getList() {
        _common.Logger.log('getList');
        return await this.productsRepository.query('select * from products');
    }
    async getProductById(id) {
        try {
            const res = await this.productsRepository.findOne({
                where: {
                    id: id
                }
            });
            return {
                code: 200,
                data: res,
                message: '查询成功'
            };
        } catch (error) {
            return {
                code: 500,
                message: '查询失败'
            };
        }
    }
    async addProduct(installData) {
        try {
            await this.productsRepository.insert(installData);
            _common.Logger.log('addProduct');
            return {
                code: 200,
                data: null,
                message: '新增成功'
            };
        } catch (error) {
            return {
                code: 500,
                data: null,
                message: error.message
            };
        }
    }
    async delProuct(id) {
        try {
            await this.productsRepository.delete(id);
            _common.Logger.log('delProuct');
            return {
                code: 200,
                data: null,
                message: '删除成功'
            };
        } catch (error) {
            return {
                code: 200,
                data: null,
                message: error.message
            };
        }
    }
    constructor(productsRepository){
        this.productsRepository = productsRepository;
    }
};
ProductsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_productsentity.Products)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], ProductsService);

//# sourceMappingURL=products.service.js.map