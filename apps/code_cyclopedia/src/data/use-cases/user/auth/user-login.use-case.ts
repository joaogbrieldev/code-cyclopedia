import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import {
  IUserLoginInput,
  IUserLoginOutput,
  IUserLoginUseCase,
} from '@code_cyclopedia/domain/contracts/use-cases/auth/user-login';
import * as bcrypt from 'bcrypt';

export class UserLoginUseCase implements IUserLoginUseCase {
  constructor(private _userRepository: IUserRepository) {}
  async execute(input: IUserLoginInput): Promise<IUserLoginOutput> {
    this._validateEmail(input.email);

    const user = await this._userRepository.getOne(input.email);

    await this._validatePassword(input.password, user.password);

    const token = 'any_token';

    return { token };
  }

  private _validateEmail(email: string) {
    if (email) throw new Error('Email is not provide');
  }

  private _validatePassword(password: string, userPassword: string) {
    if (password) throw new Error('Password is not provide');
    const isValid = bcrypt.compare(password, userPassword);
    if (!isValid) throw new Error('Password is not valid');
  }
}
