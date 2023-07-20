"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const knex_service_1 = require("../knex/knex.service");
let AppointmentService = exports.AppointmentService = class AppointmentService {
    constructor(knex) {
        this.knex = knex;
    }
    async getAppointMent(id) {
        const result = await this.knex.table('Doctors').where('id', id).first();
        if (!result)
            throw new common_1.NotFoundException();
        const { password, ...doctor } = result;
        return result;
    }
    async setAppointMent(id, dto) {
        const check = await this.knex.table('Appointments')
            .where('user_id', id)
            .andWhere('doctor_id', dto.doctor_id)
            .andWhere('appointment_date', dto.date)
            .andWhere('appointment_time', dto.time).first();
        if (check)
            throw new common_1.UnauthorizedException();
        await this.knex.table('Appointments').insert({
            doctor_id: dto.doctor_id,
            user_id: id,
            appointment_time: dto.time,
            appointment_date: dto.date
        });
        return true;
    }
};
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map