import { SeedService } from './seed.service';
export declare class SeedController {
    private seedService;
    constructor(seedService: SeedService);
    seedDb(): Promise<boolean>;
}
