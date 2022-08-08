import { Module } from '@nestjs/common';
import { IndexModule } from './modules/wechat/index/index.module';

@Module({
  imports: [IndexModule],
})
export class AppModule {}
