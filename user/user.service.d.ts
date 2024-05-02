import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<(where: import("typeorm").FindOptionsWhere<User> | import("typeorm").FindOptionsWhere<User>[]) => Promise<User[]>>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
