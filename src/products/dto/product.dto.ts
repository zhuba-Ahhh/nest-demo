import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductsDto {
  @IsNumber()
  @ApiProperty({ description: 'id' })
  id: number;

  @IsNotEmpty({ message: '用户名必填' })
  @IsString()
  @ApiProperty({ description: '用户名' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: '类型必填' })
  @ApiProperty({ description: '类型' })
  type: string;
}

export class ProductsIdDto {
  @IsNumber()
  @ApiProperty({ description: 'id' })
  id: number;
}
