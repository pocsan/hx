// cats.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: any[] = [];

  create(createCatDto: CreateCatDto): Promise<any> {
    // 假设这里有一些创建猫的逻辑
    this.cats.push(createCatDto);
    return Promise.resolve(createCatDto); // 返回创建的猫对象
  }

  // 查找所有猫
  findAll(): Promise<string> {
    // 返回所有猫的Promise
    return Promise.resolve('This action returns all cats');
  }

  // 根据id查找一个猫，返回一个Promise对象，resolve的值为"This action returns a #${id} cat"
  findOne(id: string): Promise<string> {
    return Promise.resolve(`This action returns a #${id} cat`);
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateCatDto } from './create-cat.dto';

// @Injectable()
// export class CatsService {
//   private readonly cats: CreateCatDto[] = [];

//   create(cat: CreateCatDto) {
//     this.cats.push(cat);
//   }

//   findAll(): string {
//     return JSON.stringify(this.cats);
//   }

//   findOne(id: string): string {
//     return JSON.stringify(this.cats.find((cat) => cat.id === id));
//   }
// }
