import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<string>;
    register(dto: AuthDto): Promise<boolean>;
}
