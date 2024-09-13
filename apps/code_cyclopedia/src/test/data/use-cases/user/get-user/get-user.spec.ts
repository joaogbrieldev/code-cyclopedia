import { GetUserUseCase } from '@code_cyclopedia/data/use-cases/user/get-user/get-user.use-case';
import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { IGetUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/get-user';
import { QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('#GetUserSpec', () => {
  let sut: IGetUserUseCase;
  let module: TestingModule;
  let queryBus: QueryBus;

  const userFaker = {
    data: [
      {
        id: '5a8ce678-b407-4012-bdf4-9e5639a78c1f',
        createdAt: '2024-09-11T11:20:32.391Z',
        updatedAt: '2024-09-11T11:20:32.391Z',
        deletedAt: null,
        version: 1,
        username: 'x',
        email: 'x',
        password: 'x',
      },
      {
        id: '483a7a2e-d7ef-4de2-8a06-4dc43725439a',
        createdAt: '2024-09-11T11:20:48.034Z',
        updatedAt: '2024-09-11T11:20:48.034Z',
        deletedAt: null,
        version: 1,
        username: 'x',
        email: 'x',
        password: 'x',
      },
    ],
  };
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [],
      providers: [
        {
          provide: IGetUserUseCase,
          useClass: GetUserUseCase,
        },
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: IUserRepository,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();
    sut = await module.get(IGetUserUseCase);
    queryBus = await module.resolve(QueryBus);
  });
  test('should be return a user', async () => {
    const promise = await sut.execute();
    expect(promise).toStrictEqual(userFaker);
  });
  // test('should be call repository method', async () => {
  //   const promise = await sut.execute();
  //   const spy = jest.spyOn(userRepository, 'create');
  //   expect(spy).toHaveBeenCalledTimes(1);
  //   expect(promise).toStrictEqual(userFaker);
  // });
});
