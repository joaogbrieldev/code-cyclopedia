import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '../user/user.model';

@Entity({ name: 'documentation' })
export class DocumentationModel extends BaseModel implements IDocumentation {
  repository: IRepository;

  @ManyToOne(
    () => UserModel,
    (userModel: UserModel) => userModel.documentations,
  )
  ownerUser: IUser;

  @Column({ type: 'varchar' })
  body: string;
}
