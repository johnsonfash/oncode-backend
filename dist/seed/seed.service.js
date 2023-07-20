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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
const knex_service_1 = require("../knex/knex.service");
let SeedService = exports.SeedService = class SeedService {
    constructor(knex) {
        this.knex = knex;
    }
    async seed() {
        await this.up();
        const prior = await this.knex.table('Users').first();
        if (!prior) {
            await this.knex.table('Users').insert(common_2.INSERT_USERS);
            await this.knex.table('Doctors').insert(common_2.INSERT_DOCTORS);
            await this.knex.table('DoctorFields').insert(common_2.INSERT_FIELDS);
        }
        return true;
    }
    async down() {
        return await this.knex.table.schema
            .dropTable(common_2.CONSTANTS.USER_TABLE)
            .dropTable(common_2.CONSTANTS.DOCTOR_TABLE)
            .dropTable(common_2.CONSTANTS.DOCTOR_FIELD_TABLE)
            .dropTable(common_2.CONSTANTS.APPOINTMENT_TABLE);
    }
    async up() {
        await this.knex.table.schema.hasTable(common_2.CONSTANTS.USER_TABLE).then(async (exists) => {
            if (!exists) {
                await this.knex.table.schema.createTable(common_2.CONSTANTS.USER_TABLE, (table) => {
                    table.increments('id');
                    table.string('email').notNullable().unique();
                    table.string('password').notNullable();
                    table.string('name').nullable();
                    table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                    table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                })
                    .createTable(common_2.CONSTANTS.DOCTOR_TABLE, (table) => {
                    table.increments('id');
                    table.string('email').notNullable().unique();
                    table.string('password').notNullable();
                    table.string('name').nullable();
                    table.string('field').nullable();
                    table.string('abbr').nullable();
                    table.string('bio').nullable();
                    table.string('image').nullable();
                    table.string('visit_type').nullable();
                    table.specificType('available_date', 'text ARRAY');
                    table.specificType('available_time', 'text ARRAY');
                    table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                    table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                })
                    .createTable(common_2.CONSTANTS.DOCTOR_FIELD_TABLE, (table) => {
                    table.increments('id');
                    table.string('name').notNullable();
                    table.string('abbr').nullable();
                    table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                    table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                })
                    .createTable(common_2.CONSTANTS.APPOINTMENT_TABLE, (table) => {
                    table.increments('id');
                    table.integer('doctor_id').notNullable();
                    table.integer('user_id').notNullable();
                    table.string('appointment_date').notNullable();
                    table.string('appointment_time').notNullable();
                    table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                    table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
                });
            }
        });
    }
};
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService])
], SeedService);
//# sourceMappingURL=seed.service.js.map