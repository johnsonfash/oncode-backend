import { Injectable } from '@nestjs/common';
import { CONSTANTS, INSERT_DOCTORS, INSERT_FIELDS, INSERT_USERS } from 'src/common';
import { KnexService } from 'src/knex/knex.service';

@Injectable()
export class SeedService {
  constructor(private knex: KnexService) { }

  async seed() {
    await this.up()
    const prior = await this.knex.table('Users').first()
    if (!prior) {
      await this.knex.table('Users').insert(INSERT_USERS)
      await this.knex.table('Doctors').insert(INSERT_DOCTORS)
      await this.knex.table('DoctorFields').insert(INSERT_FIELDS)
    }
    return true
  }

  async down() {
    return await this.knex.table.schema
      .dropTable(CONSTANTS.USER_TABLE)
      .dropTable(CONSTANTS.DOCTOR_TABLE)
      .dropTable(CONSTANTS.DOCTOR_FIELD_TABLE)
      .dropTable(CONSTANTS.APPOINTMENT_TABLE)
  }


  async up() {
    await this.knex.table.schema.hasTable(CONSTANTS.USER_TABLE).then(async (exists) => {
      if (!exists) {
        await this.knex.table.schema.createTable(CONSTANTS.USER_TABLE, (table) => {
          table.increments('id');
          table.string('email').notNullable().unique();
          table.string('password').notNullable()
          table.string('name').nullable()
          table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
          table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
        })
          .createTable(CONSTANTS.DOCTOR_TABLE, (table) => {
            table.increments('id');
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.string('name').nullable();
            table.string('field').nullable();
            table.string('abbr').nullable();
            table.string('bio').nullable();
            table.string('image').nullable();
            table.string('visit_type').nullable();
            table.specificType('available_date', 'text ARRAY')
            table.specificType('available_time', 'text ARRAY')
            table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
            table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
          })
          .createTable(CONSTANTS.DOCTOR_FIELD_TABLE, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('abbr').nullable();
            table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
            table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
          })
          .createTable(CONSTANTS.APPOINTMENT_TABLE, (table) => {
            table.increments('id');
            table.integer('doctor_id').notNullable();
            table.integer('user_id').notNullable();
            table.string('appointment_date').notNullable();
            table.string('appointment_time').notNullable();
            table.dateTime('created_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
            table.dateTime('updated_at', { precision: 6 }).defaultTo(this.knex.table.fn.now(6));
          })
      }
    });
  }

}
