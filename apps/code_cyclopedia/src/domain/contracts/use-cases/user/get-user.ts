import { UserDto } from '@code_cyclopedia/data/queries/get-user/get-user.dto';
import { IUseCase } from 'libs/shared/use-cases/use-case';

export abstract class IGetUserUseCase implements IUseCase<any, UserDto> {
  abstract execute(): Promise<UserDto>;
}
