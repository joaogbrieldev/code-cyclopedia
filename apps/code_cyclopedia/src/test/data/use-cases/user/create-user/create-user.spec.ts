import { CreateUserUseCase } from '@code_cyclopedia/data/use-cases/user/create-user/create-user.use-case';
import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Test, TestingModule } from '@nestjs/testing';

describe('#CreateUserSpec', () => {
  let sut: ICreateUser;
  let module: TestingModule;
  let userRepository: IUserRepository;

  const userFaker = new User({
    id: '1',
    email: 'any',
    username: 'any',
    password: 'any',
    repository: null,
  });
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [],
      providers: [
        {
          provide: ICreateUser,
          useClass: CreateUserUseCase,
        },
        {
          provide: IUserRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(userFaker),
          },
        },
      ],
    }).compile();
    sut = await module.get(ICreateUser);
    userRepository = await module.resolve(IUserRepository);
  });
  test('should be return a user', async () => {
    const promise = await sut.execute(userFaker);
    console.log(promise);
    expect(promise).toStrictEqual(userFaker);
  });
});
