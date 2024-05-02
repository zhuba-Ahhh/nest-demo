import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResultDto } from 'src/utils/result.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    findAll(): Promise<ResultDto>;
    findOne(id: string): Promise<(where: import("typeorm").FindOptionsWhere<import("./entities/user.entity").User> | import("typeorm").FindOptionsWhere<import("./entities/user.entity").User>[]) => Promise<import("./entities/user.entity").User[]>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
