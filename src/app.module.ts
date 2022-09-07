import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexModule } from './modules/wechat/index/index.module';
import loadConfig from './ormconfig.config';
@Module({
  imports: [IndexModule, TypeOrmModule.forRoot(loadConfig())],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'wechat/index', method: RequestMethod.POST }) // 中间件不处理改路径的post请求
      .forRoutes('wechat'); // 中间件将wechat作为根节点
  }
}
