/* eslint-disable @typescript-eslint/no-unused-vars */
// src/auth/auth.controller.ts
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  HttpException,
} from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from '../common/decorators/public.decorator';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { ResultDto } from '../utils/result.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<ResultDto> {
    try {
      const result = await this.authService.signUp(signUpDto);
      if (result) {
        return new ResultDto(true, HttpStatus.CREATED, '用户注册成功', result);
      } else {
        // 如果注册失败，返回相应的错误码和消息
        return new ResultDto(false, HttpStatus.BAD_REQUEST, '用户注册失败');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw new HttpException(
        new ResultDto(false, HttpStatus.INTERNAL_SERVER_ERROR, error.message),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Public()
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<ResultDto> {
    try {
      const result = await this.authService.signIn(signInDto);
      if (result) {
        return new ResultDto(true, HttpStatus.OK, '用户登录成功', result);
      } else {
        // 如果登录失败，返回相应的错误码和消息
        return new ResultDto(false, HttpStatus.BAD_REQUEST, '用户登录失败');
      }
    } catch (error) {
      throw new HttpException(
        new ResultDto(false, HttpStatus.INTERNAL_SERVER_ERROR, error.message),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
