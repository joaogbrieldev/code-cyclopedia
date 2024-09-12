import { IRepository } from './repository';

export interface IDocumentation {
  body: string;
  ownerUser: string;
  repository: IRepository;
}
