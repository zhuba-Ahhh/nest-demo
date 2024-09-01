import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { UnauthorizedExceptionFilter } from './utils/catch.error';
import { TransactionModule } from './transaction/transaction.module';
import { BudgetModule } from './budget/budget.module';
import env from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      // load: [config],
    }),
    // PrismaModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: process.env.TYPE || env.TYPE || 'mysql',
        host: process.env.DB_HOST || env.DB_HOST,
        port: +(process.env.DB_PORT || env.DB_PORT),
        username: process.env.DB_USERNAME || env.DB_USERNAME,
        password: process.env.DB_PASSWORD || env.DB_PASSWORD,
        database: process.env.DB_DATABASE || env.DB_DATABASE,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UserModule,
    TransactionModule,
    BudgetModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: UnauthorizedExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    if (consumer) {
    }
  }
}
