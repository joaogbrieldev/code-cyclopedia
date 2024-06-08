import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { EntityBase } from 'libs/shared/domain/data/entities/entity-base';

export class Documentation extends EntityBase implements IDocumentation {
  repository: IRepository;
  body: string;
  ownerUser: IUser;
}
