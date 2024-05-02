import { beforeEach, describe, expect, it, vi, vitest } from 'vitest';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';
import { Products } from '../products.entity';
import { Repository } from 'typeorm';

type productsRepository = Repository<Products>;
// 模拟 ProductsService
class MockProductsService implements Partial<ProductsService> {
  productsRepository = vi.mocked<productsRepository>; // 模拟 ProductsRepository

  getList = vi.fn().mockResolvedValue([]);
  getProductById = vi.fn().mockResolvedValue(new Products());
  addProduct = vi.fn().mockResolvedValue({});
  delProuct = vi.fn().mockResolvedValue({});
}

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: MockProductsService;

  beforeEach(() => {
    service = new MockProductsService();
    controller = new ProductsController(service as any);
  });

  describe('getList', () => {
    it('should call the service getList method', async () => {
      await controller.getList();

      expect(service.getList).toHaveBeenCalled();
    });
  });

  describe('getProductId', () => {
    it('should call the service getProductById method with the correct id', async () => {
      const mockId = 2;
      service.getProductById = vitest.fn().mockResolvedValue(new Products());

      await controller.getProductId({ id: mockId });

      expect(service.getProductById).toHaveBeenCalledWith(mockId);
    });
  });
});
