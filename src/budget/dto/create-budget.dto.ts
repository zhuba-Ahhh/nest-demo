import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsInt,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBudgetDto {
  @ApiProperty({ description: '预算金额' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ description: '预算类别' })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ description: '预算月份', minimum: 1, maximum: 12 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(12)
  month: number;

  @ApiProperty({ description: '预算年份' })
  @IsNotEmpty()
  @IsInt()
  @Min(2000)
  year: number;
}
