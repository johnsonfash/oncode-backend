import { ConfigService } from '@nestjs/config';
import knex from 'knex';
import { Appointment, Doctor, DoctorField, User } from './types';
declare module 'knex/types/tables' {
    interface Tables {
        Users: User;
        Appointments: Appointment;
        Doctors: Doctor;
        DoctorFields: DoctorField;
    }
}
export declare class KnexService {
    table: ReturnType<typeof knex>;
    constructor(config: ConfigService);
}
