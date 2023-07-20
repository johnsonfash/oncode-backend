import { KnexService } from 'src/knex/knex.service';
export declare class SeedService {
    private knex;
    constructor(knex: KnexService);
    seed(): Promise<boolean>;
    down(): Promise<void>;
    up(): Promise<void>;
}
