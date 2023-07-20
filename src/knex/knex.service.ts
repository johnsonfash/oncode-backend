import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import knex from 'knex'
import { CONSTANTS } from 'src/common';
import { Appointment, Doctor, DoctorField, User } from './types';

declare module 'knex/types/tables' {
  interface Tables {
    Users: User;
    Appointments: Appointment;
    Doctors: Doctor;
    DoctorFields: DoctorField;
  }
}

@Injectable()
export class KnexService {
  table: ReturnType<typeof knex>;
  constructor(config: ConfigService) {
    this.table = knex({
      client: 'pg',
      connection: config.get(CONSTANTS.DATABASE_URL),
    })
  }
}