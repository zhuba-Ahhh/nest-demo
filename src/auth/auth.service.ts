/* eslint-disable @typescript-eslint/no-unused-vars */
// src/auth/auth.service.ts
import { HttpCode, Inject, Injectable, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users/entities/user.entity';
import jwtConfig from '../config/jwt.config';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { HashingService } from './hashing.service';
import { ActiveUserData } from './interfaces/active-user-data.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingService: HashingService,
  ) {}

  async generateTokens(user: Users) {
    const token = await this.signToken<Partial<ActiveUserData>>(user.id, {
      name: user.name,
    });
    return { token };
  }
  private async signToken<T>(userId: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );
  }

  async signUp(signUpDto: SignUpDto) {
    const { name, password } = signUpDto;

    const existingUser = await this.userRepository.findOne({
      where: [{ name }],
    });
    if (existingUser) throw new UnauthorizedException('用户名已重复');

    const hashedPassword = await this.hashingService.hash(password);
    const user = this.userRepository.create({
      ...signUpDto,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async signIn(signInDto: SignInDto) {
    // TODO sign in
    const { name, password } = signInDto;

    const user = await this.userRepository.findOne({ where: { name } });
    if (!user) throw new UnauthorizedException('用户不存在');

    const isEqual = await this.hashingService.compare(password, user.password);
    if (!isEqual) throw new UnauthorizedException('密码错误');
    return this.generateTokens(user);
  }
}
