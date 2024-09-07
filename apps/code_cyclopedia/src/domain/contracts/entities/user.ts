import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';
import { IDocumentation } from './documentation';
import { IRepository } from './repository';

export interface IUserBehavior {
  defineName(username: string): IUser;
  defineEmail(email: string): IUser;
}

export interface IUser extends IEntityBase {
  username: string;
  email: string;
  password: string;
  documentations: Array<IDocumentation>;
  repository: IRepository;
}
