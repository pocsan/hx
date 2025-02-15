// import { Test, TestingModule } from '@nestjs/testing';
// import { CatsService } from './cats.service';

// describe('CatsService', () => {
//   let service: CatsService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [CatsService],
//     }).compile();

//     service = module.get<CatsService>(CatsService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

describe('CatsService', () => {
  //  描述CatsService
  let service: CatsService; //  定义service变量

  beforeEach(async () => {
    //  在每个测试之前执行
    const module: TestingModule = await Test.createTestingModule({
      //  创建一个测试模块
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    //  测试service是否被定义
    expect(service).toBeDefined();
  });

  it('should create a cat', () => {
    //  测试创建一个猫
    const createCatDto: CreateCatDto = {
      //  创建一个CreateCatDto实例
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    void service.create(createCatDto); //  调用service的create方法
    expect(service.findAll()).toContain(createCatDto); //  测试service.findAll()方法是否返回所有猫
  });

  it('should return all cats', () => {
    //  测试service.findAll()方法是否返回所有猫
    const createCatDto: CreateCatDto = {
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    void service.create(createCatDto);
    const cats = service.findAll();
    expect(cats).toContain(createCatDto);
  });

  it('should return one cat by id', () => {
    //  测试service.findOne()方法是否返回指定id的猫
    const createCatDto: CreateCatDto = {
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    void service.create(createCatDto);
    const cat = service.findOne('1');
    expect(cat).toBe(JSON.stringify(createCatDto));
  });
});
describe('CatsService', () => {});
