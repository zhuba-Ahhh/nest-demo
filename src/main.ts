const startTime = new Date().getTime();
import { NestFactory } from '@nestjs/core';
console.info(`NestFactory ${new Date().getTime() - startTime}`);
import { AppModule } from './app.module';
console.info(`AppModule耗时：${new Date().getTime() - startTime}`);

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe()); // 参数校验 数据验证
  app.useGlobalInterceptors(new TransformInterceptor()); // 拦截成功的返回数据
  app.useGlobalFilters(new HttpExceptionFilter()); // 拦截错误请求

  console.info(`执行至 create 耗时 ${new Date().getTime() - startTime}`);
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.info(`执行至 listen 耗时 ${new Date().getTime() - startTime}`);
}
bootstrap();
