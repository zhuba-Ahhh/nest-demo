// result.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ResultDto {
  @ApiProperty({ description: '请求是否成功', example: true })
  success: boolean;

  @ApiProperty({ description: '返回码', example: 200 })
  code: number;

  @ApiProperty({ description: '返回消息', example: '操作成功' })
  message: string;

  @ApiProperty({ description: '返回数据', example: {} })
  data?: object;

  constructor(success: boolean, code: number, message: string, data?: object) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
