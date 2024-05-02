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
const products_module_1 = require("./products/products.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const catch_error_1 = require("./utils/catch.error");
let AppModule = class AppModule {
    configure(consumer) {
        if (consumer) {
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env.development',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mysql',
                    host: process.env.DB_HOST,
                    port: +process.env.DB_PORT,
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            user_module_1.UserModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: catch_error_1.UnauthorizedExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map