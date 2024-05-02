import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { ResultDto } from 'src/utils/result.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<ResultDto>;
    signIn(signInDto: SignInDto): Promise<ResultDto>;
}
