import { Column, Entity } from 'typeorm';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { DocumentationModel } from '../documentation/documentation.model';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { UserModel } from '../user/user.model';

@Entity({ name: 'users' })
export class RepositoryModel extends BaseModel implements IRepository {
  @Column(() => UserModel)
  ownerRepository: IUser;

  @Column(() => DocumentationModel)
  documentation: IDocumentation;
}
