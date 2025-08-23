import { Test } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

describe('FlowerController', () => {
  let controller: FlowersController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
        {
          provide: FlowersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'rose',
                color: 'red',
                price: 20,
              },
              {
                id: 2,
                name: 'rose',
                color: 'red',
                price: 20,
              },
              {
                id: 3,
                name: 'rose',
                color: 'red',
                price: 20,
              },
              {
                id: 4,
                name: 'rose',
                color: 'red',
                price: 20,
              },
            ]),
            createFlower: jest.fn().mockResolvedValue([
              {
                name: 'lily',
                color: 'white',
                price: 11,
              },
            ]),
          },
        },
      ],
    }).compile();
    controller = module.get<FlowersController>(FlowersController);
  });
  it('should return an array of flowers ', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 1,
        name: 'rose',
        color: 'red',
        price: 20,
      },
      {
        id: 2,
        name: 'rose',
        color: 'red',
        price: 20,
      },
      {
        id: 3,
        name: 'rose',
        color: 'red',
        price: 20,
      },
      {
        id: 4,
        name: 'rose',
        color: 'red',
        price: 20,
      },
    ]);
  });
  it('should create a new flower ', async () => {
    expect(
      await controller.create({
        name: 'lily',
        color: 'white',
        price: 11,
      }),
    ).toEqual([{ color: 'white', name: 'lily', price: 11 }]);
  });
});
