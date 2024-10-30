import { IUseCase } from 'libs/shared/use-cases/use-case';

export type IUserLoginInput = {
  email: string;
  password: string;
};

export type IUserLoginOutput = {
  token: string;
  username: string;
  id: string;
};

export abstract class IUserLoginUseCase
  implements IUseCase<IUserLoginInput, IUserLoginOutput>
{
  abstract execute(input: IUserLoginInput): Promise<IUserLoginOutput>;
}
