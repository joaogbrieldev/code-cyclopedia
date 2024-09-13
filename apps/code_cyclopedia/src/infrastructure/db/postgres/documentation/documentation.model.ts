import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '../user/user.model';

@Entity({ name: 'documentation' })
export class DocumentationModel extends BaseModel implements IDocumentation {
  @ManyToOne(
    () => UserModel,
    (userModel: UserModel) => userModel.documentations,
  )
  ownerUser: string;

  @Column({ type: 'varchar' })
  body: string;
}
