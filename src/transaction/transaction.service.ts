import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto, userId: number) {
    const transaction = this.transactionRepository.create({
      ...createTransactionDto,
      userId,
    });
    return await this.transactionRepository.save(transaction);
  }

  async findAll(userId: number) {
    return await this.transactionRepository.find({
      where: { userId },
    });
  }

  async findOne(id: number, userId: number) {
    return await this.transactionRepository.findOne({
      where: { id, userId },
    });
  }

  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
    userId: number,
  ) {
    await this.transactionRepository.update(
      { id, userId },
      updateTransactionDto,
    );
    return this.findOne(id, userId);
  }

  async remove(id: number, userId: number) {
    await this.transactionRepository.delete({ id, userId });
  }

  async getMonthlyStatistics(userId: number, year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const result = await this.transactionRepository
      .createQueryBuilder('transaction')
      .select(
        'SUM(CASE WHEN type = :incomeType THEN amount ELSE 0 END)',
        'totalIncome',
      )
      .addSelect(
        'SUM(CASE WHEN type = :expenseType THEN amount ELSE 0 END)',
        'totalExpense',
      )
      .where('transaction.userId = :userId', { userId })
      .andWhere('transaction.date BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .setParameter('incomeType', 'income')
      .setParameter('expenseType', 'expense')
      .getRawOne();

    return result;
  }

  async getCategoryStatistics(userId: number, startDate: Date, endDate: Date) {
    const result = await this.transactionRepository
      .createQueryBuilder('transaction')
      .select('transaction.category', 'category')
      .addSelect('SUM(transaction.amount)', 'totalAmount')
      .where('transaction.userId = :userId', { userId })
      .andWhere('transaction.date BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .groupBy('transaction.category')
      .getRawMany();

    return result;
  }

  async findAllBetweenDates(userId: number, startDate: Date, endDate: Date) {
    return await this.transactionRepository.find({
      where: {
        userId,
        date: Between(startDate, endDate),
      },
    });
  }

  convertToCSV(transactions: Transaction[]) {
    const header = 'ID,Amount,Description,Date,Type,Category\n';
    const rows = transactions
      .map(
        (t) =>
          `${t.id},${t.amount},"${t.description}",${t.date.toISOString()},${t.type},${t.category}`,
      )
      .join('\n');
    return header + rows;
  }
}
