/* eslint-disable @typescript-eslint/no-unused-vars */
// src/auth/guards/access-token.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { REQUEST_USER_KEY } from '../../constants';
import jwtConfig from '../../config/jwt.config';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator';
import { ResultDto } from '../../utils/result.dto';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
    if (isPublic) return true;
    else {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) throw new UnauthorizedException('暂无权限');

      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          this.jwtConfiguration,
        );
        request[REQUEST_USER_KEY] = payload;
      } catch (error) {
        throw new UnauthorizedException('系统错误');
      }
      return true;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }
}
