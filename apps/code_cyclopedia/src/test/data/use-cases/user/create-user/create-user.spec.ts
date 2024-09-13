import { CreateUserUseCase } from '@code_cyclopedia/data/use-cases/user/create-user/create-user.use-case';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Test, TestingModule } from '@nestjs/testing';

describe('#CreateUserSpec', () => {
  let sut: ICreateUser;
  let module: TestingModule;
  let userRepository: IUserRepository;

  const userFaker: User = new User({
    id: '1',
    email: 'any',
    username: 'any',
    password: 'any',
    documentations: [],
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
    const promise: User = await sut.execute(userFaker);
    expect(promise).toStrictEqual(userFaker);
  });
  test('should be call repository method', async () => {
    const promise: IUser = await sut.execute(userFaker);
    const spy = jest.spyOn(userRepository, 'create');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(promise).toStrictEqual(userFaker);
  });
});
