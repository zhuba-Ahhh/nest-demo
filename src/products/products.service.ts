// products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}
  // 查询数据库产品数据
  async getList(): Promise<Products[]> {
    return await this.productsRepository.query('select * from products');
  }
  async getProductById(id: number): Promise<any> {
    try {
      const res = await this.productsRepository.findOne({ where: { id: id } });
      return {
        code: 200,
        data: res,
        message: '查询成功',
      };
    } catch (error) {
      return {
        code: 500,
        message: '查询失败',
      };
    }
  }
  async addProduct(installData: any): Promise<object> {
    try {
      await this.productsRepository.insert(installData);
      return {
        code: 200,
        data: null,
        message: '新增成功',
      };
    } catch (error) {
      return {
        code: 500,
        data: null,
        message: error.message,
      };
    }
  }
  async delProuct(id: number): Promise<object> {
    try {
      await this.productsRepository.delete(id);
      return {
        code: 200,
        data: null,
        message: '删除成功',
      };
    } catch (error) {
      return {
        code: 200,
        data: null,
        message: error.message,
      };
    }
  }
}
