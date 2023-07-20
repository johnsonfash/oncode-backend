import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { CONSTANTS } from "src/common";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService, private config: ConfigService) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookie = request.cookies[CONSTANTS.COOKIE_NAME]
    if (!cookie) throw new UnauthorizedException();
    try {
      const payload = await this.jwt.verifyAsync(cookie, { secret: this.config.get(CONSTANTS.JWT_SECRET) })
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true
  }
}