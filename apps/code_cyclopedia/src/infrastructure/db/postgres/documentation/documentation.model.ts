import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'documentation' })
export class DocumentationModel extends BaseModel implements IDocumentation {
  ownerUser: IUser;
  repository: IRepository;
  // @Column(() => UserModel)
  // ownerUser: IUser;

  @Column({ type: 'varchar' })
  body: string;

  // @Column(() => RepositoryModel)
  // repository: IRepository;
}
