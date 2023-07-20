import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { HomeService } from './home.service';

@UseGuards(AuthGuard)
@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) { }

  @Get()
  getAppointMent(
    @Param('date') date: string,
    @Param('time') time: string,
    @Param('field') field: string,
  ) {
    return this.homeService.getHome(date, time, field)
  }
}
