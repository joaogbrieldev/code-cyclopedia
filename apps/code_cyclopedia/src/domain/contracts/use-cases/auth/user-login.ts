import { IUseCase } from 'libs/shared/use-cases/use-case';

export type IUserLoginInput = {
  email: string;
  password: string;
  userId: string;
};

export type IUserLoginOutput = {
  token: string;
};

export abstract class IUserLoginUseCase
  implements IUseCase<IUserLoginInput, IUserLoginOutput>
{
  abstract execute(input: IUserLoginInput): Promise<IUserLoginOutput>;
}
