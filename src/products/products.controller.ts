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
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Products } from './products.entity';
import { ProductsDto, ProductsIdDto } from './dto/product.dto';

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
  @ApiParam({ name: 'id', description: '要查询的产品的ID', type: 'number' })
  @Get('getProductId')
  getProductId(@Query() query: ProductsIdDto): Promise<object> {
    const id: number = query.id;
    return this.productsService.getProductById(Number(id));
  }
  @ApiOperation({ summary: '新增产品' })
  @Post('addProduct')
  addProduct(@Body() body: ProductsDto): Promise<object> {
    return this.productsService.addProduct(body);
  }
  @ApiOperation({ summary: '通过id删除产品' })
  @ApiParam({ name: 'id', description: '要删除的产品的ID', type: 'number' })
  @Get('deleteProduct')
  deleteProduct(@Query() id: number): Promise<object> {
    return this.productsService.delProuct(Number(id));
  }
}
