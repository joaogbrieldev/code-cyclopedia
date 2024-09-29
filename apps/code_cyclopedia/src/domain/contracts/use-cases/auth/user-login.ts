import { IUseCase } from 'libs/shared/use-cases/use-case';

export type IUserLoginInput = {
  email: string;
  password: string;
};

export abstract class IUserLoginUseCase
  implements IUseCase<IUserLoginInput, void>
{
  abstract execute(input: IUserLoginInput): Promise<void>;
}
