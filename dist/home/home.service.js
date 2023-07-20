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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const knex_service_1 = require("../knex/knex.service");
let HomeService = exports.HomeService = class HomeService {
    constructor(knex) {
        this.knex = knex;
    }
    async getHome(date, time, field) {
        let andApend = false;
        let dbChain = this.knex.table('Doctors');
        if (field) {
            dbChain = dbChain.where('field', field);
            andApend = false;
        }
        if (date) {
            const query = '? = ANY(available_date)';
            dbChain = dbChain[andApend ? 'andWhereRaw' : 'whereRaw'](query, date);
            andApend = true;
        }
        if (time) {
            const query = '? = ANY(available_time)';
            dbChain = dbChain[andApend ? 'andWhereRaw' : 'whereRaw'](query, date);
            andApend = true;
        }
        return await dbChain;
    }
};
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService])
], HomeService);
//# sourceMappingURL=home.service.js.map