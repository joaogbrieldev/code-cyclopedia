import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import {
  ICreateUser,
  ICreateUserInput,
  ICreateUserOutput,
} from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase implements ICreateUser {
  constructor(private readonly _userRepository: IUserRepository) {} // @todo -> move to use command cqrs
  async execute(input: ICreateUserInput): Promise<ICreateUserOutput> {
    const user: User = new User({
      id: input.id,
      username: input.username,
      email: input.email,
      password: input.password,
      documentations: [],
    });
    const userCreated: IUser = await this._userRepository.create(user);
    return userCreated;
  }
}
