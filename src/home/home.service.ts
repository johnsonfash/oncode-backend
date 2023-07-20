import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/knex/knex.service';

@Injectable()
export class HomeService {
  constructor(private knex: KnexService) { }

  async getHome(date: string, time: string, field: string) {
    let andApend = false
    let dbChain = this.knex.table('Doctors')

    if (field) {
      dbChain = dbChain.where('field', field)
      andApend = false
    }

    if (date) {
      const query = '? = ANY(available_date)'
      dbChain = dbChain[andApend ? 'andWhereRaw' : 'whereRaw'](query, date)
      andApend = true
    }

    if (time) {
      const query = '? = ANY(available_time)'
      dbChain = dbChain[andApend ? 'andWhereRaw' : 'whereRaw'](query, date)
      andApend = true
    }

    return await dbChain
    
  }
}
