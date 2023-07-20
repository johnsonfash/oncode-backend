import { KnexService } from 'src/knex/knex.service';
import { AppointmentDto } from './dto';
export declare class AppointmentService {
    private knex;
    constructor(knex: KnexService);
    getAppointMent(id: number): Promise<import("../knex/types").Doctor>;
    setAppointMent(id: number, dto: AppointmentDto): Promise<boolean>;
}
