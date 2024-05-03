/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { UnauthorizedExceptionFilter } from './utils/catch.error';
import env from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: process.env.TYPE || env.TYPE || 'mysql',
        host: process.env.DB_HOST || env.DB_HOST,
        port: +(process.env.DB_PORT || env.DB_PORT),
        username: process.env.DB_USERNAME || env.DB_USERNAME,
        password: process.env.DB_PASSWORD || env.DB_PASSWORD,
        database: process.env.DB_DATABASE || env.DB_DATABASE,
        autoLoadEntities: true,
        // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
        synchronize: true,
      }),
    }),
    ProductsModule,
    UsersModule,
    UserModule,
    // AuthModule, // 鉴权
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
    // ... middleware configurations
  }
}
