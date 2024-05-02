"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./core/filter/http-exception/http-exception.filter");
const transform_interceptor_1 = require("./core/interceptor/transform/transform.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('管理后台')
        .setDescription('管理后台接口文档')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map