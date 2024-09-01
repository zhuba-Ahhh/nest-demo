import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsEnum,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsEnum(['income', 'expense'])
  type: 'income' | 'expense';

  @IsNotEmpty()
  @IsString()
  category: string;
}
