/* eslint-disable @typescript-eslint/no-unused-vars */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _productsmodule = require("./products/products.module");
const _typeorm = require("@nestjs/typeorm");
const _usermodule = require("./user/user.module");
const _usersmodule = require("./users/users.module");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _catcherror = require("./utils/catch.error");
const _env = /*#__PURE__*/ _interop_require_default(require("./env"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
    configure(consumer) {
        if (consumer) {}
    // ... middleware configurations
    }
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot({
                envFilePath: '.env.development'
            }),
            _typeorm.TypeOrmModule.forRootAsync({
                useFactory: ()=>({
                        type: process.env.TYPE || _env.default.TYPE || 'mysql',
                        host: process.env.DB_HOST || _env.default.DB_HOST,
                        port: +(process.env.DB_PORT || _env.default.DB_PORT),
                        username: process.env.DB_USERNAME || _env.default.DB_USERNAME,
                        password: process.env.DB_PASSWORD || _env.default.DB_PASSWORD,
                        database: process.env.DB_DATABASE || _env.default.DB_DATABASE,
                        autoLoadEntities: true,
                        // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
                        synchronize: true
                    })
            }),
            _productsmodule.ProductsModule,
            _usersmodule.UsersModule,
            _usermodule.UserModule
        ],
        controllers: [],
        providers: [
            {
                provide: _core.APP_FILTER,
                useClass: _catcherror.UnauthorizedExceptionFilter
            }
        ]
    })
], AppModule);
