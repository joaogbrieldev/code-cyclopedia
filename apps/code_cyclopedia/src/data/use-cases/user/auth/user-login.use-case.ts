import { ITokenizationService } from '@code_cyclopedia/domain/contracts/infra-services/tokenization.service';
import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import {
  IUserLoginInput,
  IUserLoginOutput,
  IUserLoginUseCase,
} from '@code_cyclopedia/domain/contracts/use-cases/auth/user-login';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserLoginUseCase implements IUserLoginUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _tokenizationService: ITokenizationService,
  ) {}
  async execute(input: IUserLoginInput): Promise<IUserLoginOutput> {
    this._validateEmail(input.email);

    const user = await this._userRepository.getOne({ email: input.email });

    await this._validatePassword(input.password, user.password);

    const payload = {
      userId: user.id,
    };

    const { token } = await this._tokenizationService.generateTokens(payload);
    return { token, username: user.username, id: user.id };
  
  }

  private _validateEmail(email: string) {
    if (!email) throw new Error('Email is not provide');
  }

  private _validatePassword(password: string, userPassword: string) {
    if (!password) throw new Error('Password is not provide');
    const isValid = bcrypt.compare(password, userPassword);
    if (!isValid) throw new Error('Password is not valid');
  }
}
