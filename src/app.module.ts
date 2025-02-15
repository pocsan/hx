import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

// 导出一个模块，该模块包含控制器、服务和导入的模块
@Module({
  // 导入的模块
  imports: [],
  // 控制器
  controllers: [AppController, CatsController],
  // 服务
  providers: [AppService, CatsService],
})
// 导出模块
export class AppModule {}
