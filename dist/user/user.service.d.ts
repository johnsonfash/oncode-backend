import { KnexService } from 'src/knex/knex.service';
export declare class UserService {
    private knex;
    constructor(knex: KnexService);
    getMe(id: number): Promise<{
        id: number;
        email: string;
        name?: string;
        created_at: string;
        updated_at: string;
    }>;
}
