"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _vitest = require("vitest");
const _productscontroller = require("../products.controller");
const _productsentity = require("../products.entity");
// 模拟 ProductsService
let MockProductsService = class MockProductsService {
    constructor(){
        this.productsRepository = _vitest.vi.mocked // 模拟 ProductsRepository
        ;
        this.getList = _vitest.vi.fn().mockResolvedValue([]);
        this.getProductById = _vitest.vi.fn().mockResolvedValue(new _productsentity.Products());
        this.addProduct = _vitest.vi.fn().mockResolvedValue({});
        this.delProuct = _vitest.vi.fn().mockResolvedValue({});
    }
};
(0, _vitest.describe)('ProductsController', ()=>{
    let controller;
    let service;
    (0, _vitest.beforeEach)(()=>{
        service = new MockProductsService();
        controller = new _productscontroller.ProductsController(service);
    });
    (0, _vitest.describe)('getList', ()=>{
        (0, _vitest.it)('should call the service getList method', async ()=>{
            await controller.getList();
            (0, _vitest.expect)(service.getList).toHaveBeenCalled();
        });
    });
    (0, _vitest.describe)('getProductId', ()=>{
        (0, _vitest.it)('should call the service getProductById method with the correct id', async ()=>{
            const mockId = 2;
            service.getProductById = _vitest.vitest.fn().mockResolvedValue(new _productsentity.Products());
            await controller.getProductId({
                id: mockId
            });
            (0, _vitest.expect)(service.getProductById).toHaveBeenCalledWith(mockId);
        });
    });
});

//# sourceMappingURL=products.test.js.map