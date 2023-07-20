import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppointmentService } from './appointment.service';
import { AppointmentDto } from './dto';
import { GetUser } from 'src/user/decorator';

@Controller('appointment')
@UseGuards(AuthGuard)
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) { }

  @Get()
  getAppointMent(@Param('doctor_id', ParseIntPipe) doctor_id: number) {
    return this.appointmentService.getAppointMent(doctor_id)
  }

  @Post()
  setAppointMent(@GetUser('id') id: number, @Body() dto: AppointmentDto) {
    return this.appointmentService.setAppointMent(id, dto)
  }
}
