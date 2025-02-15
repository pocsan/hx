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

// import { Controller, Get } from '@nestjs/common';
// import { CatsService } from './cats.service';

// @Controller('cats')
// export class CatsController {
//   constructor(private readonly catsService: CatsService) {}

//   @Get()
//   findAll(): string {
//     return this.catsService.findAll();
//   }
// }

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  @Post()
  // 创建一个异步方法，用于创建一个猫
  async create(@Body() createCatDto: CreateCatDto) {
    // 调用catsService中的create方法，传入createCatDto参数
    await this.catsService.create(createCatDto);
  }

  @Get()
  // 异步方法，返回一个Promise对象，Promise对象中包含一个字符串
  async findAll(): Promise<string> {
    // 调用catsService中的findAll方法，返回一个Promise对象
    return this.catsService.findAll();
  }

  @Get(':id')
  // 根据id查找一个猫
  async findOne(@Param('id') id: string): Promise<string> {
    // 调用catsService的findOne方法，传入id参数
    return this.catsService.findOne(id);
  }
}

// "test": "jest",
// "test:watch": "jest --watch",
// "test:cov": "jest --coverage",
// "test:e2e": "jest --config ./test/jest-e2e.json",
