import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    //输出查询SQL等LOG
    super(
      configService.getOrThrow('app.isDev')
        ? { log: ['query', 'info', 'warn', 'error'] }
        : undefined,
    );
  }
}
