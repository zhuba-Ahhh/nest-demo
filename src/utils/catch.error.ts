/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ResultDto } from 'src/utils/result.dto';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = HttpStatus.UNAUTHORIZED;
    let errorMessage = null;
    const responseData = exception.getResponse();
    if (
      typeof responseData === 'object' &&
      responseData !== null &&
      'message' in responseData
    ) {
      // 获取 message 属性的值
      errorMessage = responseData.message;
    } else {
      // 处理 response 不是对象或没有 message 属性的情况
      console.log(
        'Response is not an object or does not contain a message property',
      );
    }
    const result = new ResultDto(false, status, errorMessage);
    response.status(status).json(result);
  }
}
