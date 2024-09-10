import { IGetUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/get-user';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUserUseCase } from './get-user.use-case';

export const getUserProvider: Provider = {
  provide: IGetUserUseCase,
  useClass: GetUserUseCase,
};

@Module({
  providers: [getUserProvider],
  exports: [getUserProvider],
  imports: [CqrsModule],
})
export class GetUserDataModule {}
