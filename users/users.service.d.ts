import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
}
