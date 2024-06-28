import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { UserRepositoryModule } from '@code_cyclopedia/infrastructure/db/postgres/user/user-repository.module';
import { Module, Provider } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.use-case';

export const createUserProvider: Provider = {
  provide: ICreateUser,
  useClass: CreateUserUseCase,
};

@Module({
  providers: [createUserProvider],
  imports: [UserRepositoryModule],
  exports: [createUserProvider],
})
export class CreateUserDataModule {}
