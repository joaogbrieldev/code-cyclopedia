import { IUseCase } from 'libs/shared/use-cases/use-case';
import { IDocumentation } from '../../entities/documentation';
import { IRepository } from '../../entities/repository';
import { IUser } from '../../entities/user';

export interface ICreateUserInput {
  id?: string;
  email: string;
  username: string;
  documentations: Array<IDocumentation>;
  password: string;
  repository: IRepository;
}

export type ICreateUserOutput = IUser;

export abstract class ICreateUser
  implements IUseCase<ICreateUserInput, ICreateUserOutput>
{
  abstract execute(input: ICreateUserInput): Promise<ICreateUserOutput>;
}
