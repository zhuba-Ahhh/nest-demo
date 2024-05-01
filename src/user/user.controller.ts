import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResultDto } from 'src/utils/result.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('list')
  async findAll(): Promise<ResultDto> {
    try {
      const result = await this.userService.findAll();
      if (result) {
        return new ResultDto(true, 200, '', result);
      } else {
        return new ResultDto(false, 500, '查询失败');
      }
    } catch (error) {
      throw new HttpException(
        new ResultDto(false, HttpStatus.INTERNAL_SERVER_ERROR, error.message),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
