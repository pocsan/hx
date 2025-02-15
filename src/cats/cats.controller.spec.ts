// import { Test, TestingModule } from '@nestjs/testing';
// import { CatsController } from './cats.controller';

// describe('CatsController', () => {
//   let controller: CatsController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CatsController],
//     }).compile();

//     controller = module.get<CatsController>(CatsController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a cat', async () => {
    const createCatDto: CreateCatDto = {
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    const createSpy = jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(createCatDto));
    await controller.create(createCatDto);
    expect(createSpy).toHaveBeenCalledWith(createCatDto);
  });

  it('should return all cats', async () => {
    const createCatDto: CreateCatDto = {
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    jest
      .spyOn(service, 'findAll')
      .mockImplementation(() =>
        Promise.resolve(JSON.stringify([createCatDto])),
      );
    expect(await controller.findAll()).toBe(JSON.stringify([createCatDto]));
  });

  it('should return one cat by id', async () => {
    const createCatDto: CreateCatDto = {
      id: '1',
      name: 'Kitty',
      age: 2,
      breed: 'Siamese',
    };
    jest
      .spyOn(service, 'findOne')
      .mockImplementation(() => Promise.resolve(JSON.stringify(createCatDto)));
    expect(await controller.findOne('1')).toBe(JSON.stringify(createCatDto));
  });
});
