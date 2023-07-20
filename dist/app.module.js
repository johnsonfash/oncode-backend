"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const knex_module_1 = require("./knex/knex.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const appointment_module_1 = require("./appointment/appointment.module");
const home_controller_1 = require("./home/home.controller");
const home_service_1 = require("./home/home.service");
const home_module_1 = require("./home/home.module");
const seed_controller_1 = require("./seed/seed.controller");
const seed_service_1 = require("./seed/seed.service");
const seed_module_1 = require("./seed/seed.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, knex_module_1.KnexModule, config_1.ConfigModule.forRoot({ isGlobal: true }), user_module_1.UserModule, appointment_module_1.AppointmentModule, home_module_1.HomeModule, seed_module_1.SeedModule],
        controllers: [home_controller_1.HomeController, seed_controller_1.SeedController],
        providers: [home_service_1.HomeService, seed_service_1.SeedService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map