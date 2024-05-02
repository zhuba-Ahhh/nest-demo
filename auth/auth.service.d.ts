import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Users } from '../users/entities/user.entity';
import jwtConfig from '../config/jwt.config';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { HashingService } from './hashing.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly hashingService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, hashingService: HashingService);
    generateTokens(user: Users): Promise<{
        token: string;
    }>;
    private signToken;
    signUp(signUpDto: SignUpDto): Promise<Users>;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
}
