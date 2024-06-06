import { IUpdateUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/update-user';
import { Module, Provider } from '@nestjs/common';
import { UpdateUserUseCase } from './update-user.use-case';

export const updateUserProvider: Provider = {
  provide: IUpdateUserUseCase,
  useClass: UpdateUserUseCase,
};

@Module({
  providers: [updateUserProvider],
  exports: [updateUserProvider],
  imports: [],
})
export class UpdateUserDataModule {}
