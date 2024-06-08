import { IDocumentation } from './documentation';
import { IUser } from './user';

export interface IRepository {
  ownerRepository: IUser;
  documentation: IDocumentation;
}
