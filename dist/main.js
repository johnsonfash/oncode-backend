"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const common_2 = require("./common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { credentials: true, origin: true } });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useGlobalFilters(new common_2.HttpExceptionFilter());
    app.useGlobalInterceptors(new common_2.TransformInterceptor());
    app.use(cookieParser());
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map