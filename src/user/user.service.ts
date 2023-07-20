import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/knex/knex.service';

@Injectable()
export class UserService {
  constructor(private knex: KnexService) { }

  async getMe(id: number) {
    const user = await this.knex.table('Users').where('id', id).first()
    const { password, ...result } = user
    return result
  }
}
