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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../common");
let AuthGuard = exports.AuthGuard = class AuthGuard {
    constructor(jwt, config) {
        this.jwt = jwt;
        this.config = config;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const cookie = request.cookies[common_2.CONSTANTS.COOKIE_NAME];
        if (!cookie)
            throw new common_1.UnauthorizedException();
        try {
            const payload = await this.jwt.verifyAsync(cookie, { secret: this.config.get(common_2.CONSTANTS.JWT_SECRET) });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, config_1.ConfigService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map