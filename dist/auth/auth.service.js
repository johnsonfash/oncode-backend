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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const knex_service_1 = require("../knex/knex.service");
const common_2 = require("../common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = exports.AuthService = class AuthService {
    constructor(knex, jwt, config) {
        this.knex = knex;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto, res) {
        const user = await this.knex.table('Users').where('email', dto.email).first();
        if (!user)
            throw new common_1.NotFoundException('User not found');
        if (!await argon.verify(user.password, dto.password))
            throw new common_1.UnauthorizedException('Invalid password');
        const { password, ...result } = user;
        const token = await this.jwt.signAsync({ id: user.id }, { secret: this.config.get(common_2.CONSTANTS.JWT_SECRET) });
        res.cookie(common_2.CONSTANTS.COOKIE_NAME, token);
        return result;
    }
    async register(dto) {
        const hash = await argon.hash(dto.password);
        await this.knex.table('Users').insert({ password: hash, email: dto.email });
        return true;
    }
    async setCookie(res) {
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService, jwt_1.JwtService, config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map