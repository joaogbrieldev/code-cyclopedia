import {
  ICreateUser,
  ICreateUserInput,
  ICreateUserOutput,
} from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase implements ICreateUser {
  async execute(input: ICreateUserInput): Promise<ICreateUserOutput> {
    const user: User = new User({
      id: input.id,
      username: input.username,
      email: input.email,
      password: input.password,
      repository: input.repository,
    });
    return user;
  }
}
