import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User) private userRepository: Repository<User>;
  async create(createUserDto: CreateUserDto) {
    createUserDto.createTime = createUserDto.updateTime = new Date();
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    console.log(id);
    return this.userRepository.findBy;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.updateTime = new Date();
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
