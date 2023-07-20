import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as argon from 'argon2';
import { KnexService } from 'src/knex/knex.service';
import { AuthDto } from './dto';
import { User } from 'src/knex/types';
import { Response } from 'express';
import { CONSTANTS } from 'src/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private knex: KnexService, private jwt: JwtService, private config: ConfigService) { }
  async login(dto: AuthDto, res: Response): Promise<string> {
    const user = await this.knex.table('Users').where('email', dto.email).first();
    if (!user) throw new NotFoundException('User not found')
    if (!await argon.verify(user.password, dto.password)) throw new UnauthorizedException('Invalid password')
    return await this.jwt.signAsync({ id: user.id }, { secret: this.config.get(CONSTANTS.JWT_SECRET) })
  }

  async register(dto: AuthDto): Promise<boolean> {
    const hash = await argon.hash(dto.password)
    await this.knex.table('Users').insert({ password: hash, email: dto.email })
    return true
  }

  async setCookie(res) {

  }
}
