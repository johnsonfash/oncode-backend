import { KnexService } from 'src/knex/knex.service';
import { AuthDto } from './dto';
import { User } from 'src/knex/types';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private knex;
    private jwt;
    private config;
    constructor(knex: KnexService, jwt: JwtService, config: ConfigService);
    login(dto: AuthDto, res: Response): Promise<Omit<User, 'password'>>;
    register(dto: AuthDto): Promise<boolean>;
    setCookie(res: any): Promise<void>;
}
