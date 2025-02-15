// import { Controller } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {}.

// import { Controller, Get } from '@nestjs/common';

// @Controller('cats') // 定义一个名为cats的控制器
// export class CatsController {
//   @Get() // 定义一个GET请求的路由
//   findAll(): string {
//     return 'This action returns all cats'; // 返回所有猫的信息
//   }
// }

import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }
}
