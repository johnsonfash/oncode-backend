import { HomeService } from './home.service';
export declare class HomeController {
    private homeService;
    constructor(homeService: HomeService);
    getAppointMent(date: string, time: string, field: string): Promise<import("../knex/types").Doctor[]>;
}
