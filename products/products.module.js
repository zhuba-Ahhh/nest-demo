"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductsModule", {
    enumerable: true,
    get: function() {
        return ProductsModule;
    }
});
const _common = require("@nestjs/common");
const _productscontroller = require("./products.controller");
const _productsservice = require("./products.service");
const _typeorm = require("@nestjs/typeorm");
const _productsentity = require("./products.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ProductsModule = class ProductsModule {
};
ProductsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _productscontroller.ProductsController
        ],
        providers: [
            _productsservice.ProductsService
        ],
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _productsentity.Products
            ])
        ]
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map