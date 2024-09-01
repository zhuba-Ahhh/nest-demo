import { Transaction } from '../../transaction/entities/transaction.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  password: string;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.userId)
  transactions: Promise<Transaction[]>;

  @OneToMany(() => Budget, (budget) => budget.userId)
  budgets: Budget[];
}
