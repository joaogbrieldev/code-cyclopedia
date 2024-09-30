import { IUserLoginUseCase } from '@code_cyclopedia/domain/contracts/use-cases/auth/user-login';
import { Module, Provider } from '@nestjs/common';
import { UserLoginUseCase } from './user-login.use-case';

export const userLoginProvider: Provider = {
  useClass: UserLoginUseCase,
  provide: IUserLoginUseCase,
};

@Module({
  imports: [],
  exports: [userLoginProvider],
  providers: [userLoginProvider],
})
export class UserLoginDataModule {}
