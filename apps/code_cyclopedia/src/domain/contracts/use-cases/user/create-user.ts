import { IUseCase } from 'libs/shared/use-cases/use-case';
import { IRepository } from '../../entities/repository';
import { IUser } from '../../entities/user';

export interface ICreateUserInput {
  id: string;
  email: string;
  username: string;
  password: string;
  repository: IRepository;
}

export type ICreateUserOutput = IUser;

export abstract class ICreateUser
  implements IUseCase<ICreateUserInput, ICreateUserOutput>
{
  abstract execute(input: ICreateUserInput): Promise<ICreateUserOutput>;
}
