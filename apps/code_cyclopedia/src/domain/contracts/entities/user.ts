import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';
import { IRepository } from './repository';

export interface IUserBehavior {
  defineName(username: string): IUser;
  defineEmail(email: string): IUser;
}

export interface IUser extends IEntityBase {
  username: string;
  email: string;
  password: string;
  repository: IRepository;
}
