import { IRepository } from './repository';
import { IUser } from './user';

export interface IDocumentation {
  body: string;
  ownerUser: IUser;
  repository: IRepository;
}
