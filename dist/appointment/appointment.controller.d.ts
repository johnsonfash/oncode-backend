import { AppointmentService } from './appointment.service';
import { AppointmentDto } from './dto';
export declare class AppointmentController {
    private appointmentService;
    constructor(appointmentService: AppointmentService);
    getAppointMent(doctor_id: number): Promise<import("../knex/types").Doctor>;
    setAppointMent(id: number, dto: AppointmentDto): Promise<boolean>;
}
