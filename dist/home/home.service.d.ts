import { KnexService } from 'src/knex/knex.service';
export declare class HomeService {
    private knex;
    constructor(knex: KnexService);
    getHome(date: string, time: string, field: string): Promise<import("../knex/types").Doctor[]>;
}
