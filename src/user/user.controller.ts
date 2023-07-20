import { Controller, Get, UnauthorizedException, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';
import { GetUser } from './decorator';

// @UseGuards(AuthGuard)
// @Controller('users')
// export class UserController {
//   @Get('me')
//   getMe(@GetUser() user: User) {
//     return user
//   }
// }

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('me')
  getMe(@GetUser('id') id: number) {
    return this.userService.getMe(id);
  }
}
