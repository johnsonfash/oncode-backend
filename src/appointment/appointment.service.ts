import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { KnexService } from 'src/knex/knex.service';
import { AppointmentDto } from './dto';

@Injectable()
export class AppointmentService {

  constructor(private knex: KnexService) { }

  async getAppointMent(id: number) {
    const result = await this.knex.table('Doctors').where('id', id).first();
    if (!result) throw new NotFoundException()
    const { password, ...doctor } = result
    return result
  }

  async setAppointMent(id: number, dto: AppointmentDto) {
    const check = await this.knex.table('Appointments')
      .where('user_id', id)
      .andWhere('doctor_id', dto.doctor_id)
      .andWhere('appointment_date', dto.date)
      .andWhere('appointment_time', dto.time).first()

    if (check) throw new UnauthorizedException()
    await this.knex.table('Appointments').insert({
      doctor_id: dto.doctor_id,
      user_id: id,
      appointment_time: dto.time,
      appointment_date: dto.date
    })
    
    return true
  }
}
