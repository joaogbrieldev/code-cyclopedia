import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { EntityBase } from 'libs/shared/domain/data/entities/entity-base';

export class Repository extends EntityBase implements IRepository {
  ownerRepository: IUser;
  documentation: IDocumentation;
}
