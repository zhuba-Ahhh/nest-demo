/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // 通过数据库查询产品list
  @Get('list')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }
  @Get('getProductId')
  getProductId(@Query() query: any): Promise<object> {
    const id: number = parseInt(query.id);
    return this.productsService.getProductById(id);
  }
  @Post('addProduct')
  addProduct(@Body() body: any): Promise<object> {
    return this.productsService.addProduct(body);
  }
  @Delete('deleteProduct')
  deleteProduct(@Query() id: number): Promise<object> {
    return this.productsService.delProuct(id);
  }
}
