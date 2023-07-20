import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from './knex/knex.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { SeedController } from './seed/seed.controller';
import { SeedService } from './seed/seed.service';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [AuthModule, KnexModule, ConfigModule.forRoot({ isGlobal: true }), UserModule, AppointmentModule, HomeModule, SeedModule],
  controllers: [HomeController, SeedController],
  providers: [HomeService, SeedService],
})
export class AppModule { }
