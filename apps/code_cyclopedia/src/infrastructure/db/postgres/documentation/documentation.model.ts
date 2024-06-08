import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { Column, Entity } from 'typeorm';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { UserModel } from '../user/user.model';
import { RepositoryModel } from '../repository/repository.model';

@Entity({ name: 'documentation' })
export class DocumentationModel extends BaseModel implements IDocumentation {
  @Column(() => UserModel)
  ownerUser: IUser;

  @Column({ type: 'varchar', nullable: false })
  body: string;

  @Column(() => RepositoryModel)
  repository: IRepository;
}
