import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(id: number): Promise<{
        id: number;
        email: string;
        name?: string;
        created_at: string;
        updated_at: string;
    }>;
}
