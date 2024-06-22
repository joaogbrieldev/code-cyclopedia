import { CreateUserUseCase } from '@code_cyclopedia/data/use-cases/user/create-user/create-user.use-case';
import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Test, TestingModule } from '@nestjs/testing';

describe('#CreateUserSpec', () => {
  let sut: ICreateUser;
  let module: TestingModule;

  const userFaker = new User({
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
      ],
    }).compile();
    sut = await module.get(ICreateUser);
  });
  test('should be return a user', async () => {
    const promise = await sut.execute(userFaker);
    console.log(promise);
    expect(promise).toStrictEqual(userFaker);
  });
  test('should be return a ucgbgfnser', async () => {
    const promise = 5;
    expect(promise).toStrictEqual(5);
  });
});
