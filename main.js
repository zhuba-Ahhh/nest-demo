"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swagger = require("@nestjs/swagger");
const _common = require("@nestjs/common");
const _httpexceptionfilter = require("./core/filter/http-exception/http-exception.filter");
const _transforminterceptor = require("./core/interceptor/transform/transform.interceptor");
const startTime = new Date().getTime();
console.info(`NestFactory ${new Date().getTime() - startTime}`);
console.info(`AppModule耗时：${new Date().getTime() - startTime}`);
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.setGlobalPrefix('api/');
    app.useGlobalPipes(new _common.ValidationPipe()); // 参数校验 数据验证
    app.useGlobalInterceptors(new _transforminterceptor.TransformInterceptor()); // 拦截成功的返回数据
    app.useGlobalFilters(new _httpexceptionfilter.HttpExceptionFilter()); // 拦截错误请求
    console.info(`执行至 create 耗时 ${new Date().getTime() - startTime}`);
    const config = new _swagger.DocumentBuilder().setTitle('管理后台').setDescription('管理后台接口文档').setVersion('1.0').addBearerAuth().build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
    console.info(`执行至 listen 耗时 ${new Date().getTime() - startTime}`);
}
bootstrap();

//# sourceMappingURL=main.js.map