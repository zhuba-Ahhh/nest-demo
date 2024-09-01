import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Res,
  Query,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto, @Request() req) {
    return this.transactionService.create(createTransactionDto, req.user.sub);
  }

  @Get()
  findAll(@Request() req) {
    return this.transactionService.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.transactionService.findOne(+id, req.user.sub);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @Request() req,
  ) {
    return this.transactionService.update(
      +id,
      updateTransactionDto,
      req.user.sub,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.transactionService.remove(+id, req.user.sub);
  }

  @Get('statistics/monthly')
  async getMonthlyStatistics(
    @Query('year') year: number,
    @Query('month') month: number,
    @Request() req,
  ) {
    return this.transactionService.getMonthlyStatistics(
      req.user.sub,
      year,
      month,
    );
  }

  @Get('statistics/category')
  async getCategoryStatistics(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Request() req,
  ) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.transactionService.getCategoryStatistics(
      req.user.sub,
      start,
      end,
    );
  }

  @Get('export')
  async exportTransactions(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Request() req,
    @Res() res,
  ) {
    const transactions = await this.transactionService.findAllBetweenDates(
      req.user.sub,
      new Date(startDate),
      new Date(endDate),
    );

    const csv = this.transactionService.convertToCSV(transactions);

    res.header('Content-Type', 'text/csv');
    res.attachment('transactions.csv');
    return res.send(csv);
  }
}
