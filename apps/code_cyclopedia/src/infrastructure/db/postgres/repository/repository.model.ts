import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class RepositoryModel extends BaseModel implements IRepository {
  ownerRepository: IUser;
  documentation: IDocumentation;
  // @Column(() => UserModel)
  // ownerRepository: IUser;
  // @Column(() => DocumentationModel)
  // documentation: IDocumentation;
}
