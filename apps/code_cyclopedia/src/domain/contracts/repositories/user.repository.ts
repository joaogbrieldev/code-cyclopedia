import { User } from '@code_cyclopedia/domain/models/entities/user';
import { IRepositoryBase } from 'libs/shared/domain/contracts/infrastructure/repository/repository.base';
import { IUser } from '../entities/user';

export abstract class IUserRepository extends IRepositoryBase<User> {
  abstract getAll(): Promise<IUser>;
}
