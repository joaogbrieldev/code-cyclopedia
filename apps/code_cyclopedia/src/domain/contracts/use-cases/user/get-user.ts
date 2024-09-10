import { IUseCase } from 'libs/shared/use-cases/use-case';

export abstract class IGetUserUseCase implements IUseCase<any, void> {
  abstract execute(): Promise<void>;
}
