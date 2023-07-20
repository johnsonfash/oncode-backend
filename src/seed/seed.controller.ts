import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private seedService: SeedService) { }

  @Get()
  seedDb() {
    return this.seedService.seed();
  }
}
