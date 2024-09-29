import {
  IUserLoginInput,
  IUserLoginUseCase,
} from '@code_cyclopedia/domain/contracts/use-cases/auth/user-login';

export class UserLoginUseCase implements IUserLoginUseCase {
  async execute(input: IUserLoginInput): Promise<void> {
    console.log(input);
  }
}
