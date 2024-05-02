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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // 通过数据库查询产品list
  @ApiOperation({ summary: '查询产品list' })
  @Get('list')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }
  @ApiOperation({ summary: '通过id查询产品' })
  @Get('getProductId')
  getProductId(@Query() query: any): Promise<object> {
    const id: number = parseInt(query.id);
    return this.productsService.getProductById(id);
  }
  @ApiOperation({ summary: '新增产品' })
  @Post('addProduct')
  addProduct(@Body() body: any): Promise<object> {
    return this.productsService.addProduct(body);
  }
  @ApiOperation({ summary: '通过id删除产品' })
  @Get('deleteProduct')
  deleteProduct(@Query() id: number): Promise<object> {
    return this.productsService.delProuct(id);
  }
}
