import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // 获取Hello字符串
  getHello(): string {
    // 调用appService中的getHello方法
    return this.appService.getHello();
  }
}
