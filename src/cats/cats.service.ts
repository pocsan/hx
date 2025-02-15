import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  // 查找所有猫
  findAll(): string {
    // 返回所有猫的信息
    return 'This action returns all cats';
  }
}
