import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { DocumentationModel } from '../documentation/documentation.model';

@Entity({ name: 'users' })
export class UserModel extends BaseModel implements IUser {
  repository: IRepository;

  @Column({ type: 'varchar', default: 'x' })
  username: string;

  @Column({ type: 'varchar', default: 'x' })
  email: string;

  @Column({ type: 'varchar', default: 'x' })
  password: string;

  @OneToMany(
    () => DocumentationModel,
    (documentationModel: DocumentationModel) => documentationModel.ownerUser,
    { cascade: true },
  )
  @JoinColumn()
  documentations: IDocumentation[];
}
