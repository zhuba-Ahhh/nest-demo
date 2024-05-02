import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import jwtConfig from '../../config/jwt.config';
export declare class AccessTokenGuard implements CanActivate {
    private readonly reflector;
    private readonly jwtService;
    private readonly jwtConfiguration;
    constructor(reflector: Reflector, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
