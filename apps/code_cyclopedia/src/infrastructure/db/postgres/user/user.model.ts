import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity, OneToMany } from 'typeorm';
import { DocumentationModel } from '../documentation/documentation.model';

@Entity({ name: 'users' })
export class UserModel extends BaseModel implements IUser {
  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany(
    () => DocumentationModel,
    (documentationModel: DocumentationModel) => documentationModel.ownerUser,
    { cascade: true, eager: true },
  )
  documentations: IDocumentation[];
}
