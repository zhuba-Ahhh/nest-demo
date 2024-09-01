import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  async create(createBudgetDto: CreateBudgetDto, userId: number) {
    const budget = this.budgetRepository.create({
      ...createBudgetDto,
      userId,
    });
    return await this.budgetRepository.save(budget);
  }

  async findAll(userId: number) {
    return await this.budgetRepository.find({
      where: { userId },
    });
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto, userId: number) {
    await this.budgetRepository.update({ id, userId }, updateBudgetDto);
    return this.findOne(id, userId);
  }

  async findOne(id: number, userId: number) {
    return await this.budgetRepository.findOne({
      where: { id, userId },
    });
  }

  async remove(id: number, userId: number) {
    await this.budgetRepository.delete({ id, userId });
  }
}
