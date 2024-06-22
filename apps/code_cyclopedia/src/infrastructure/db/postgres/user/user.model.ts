import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { BaseModel } from 'libs/shared/infrastructure/db/postgres/models/base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel extends BaseModel implements IUser {
  repository: IRepository;
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  // @Column(() => RepositoryModel)
  // repository: IRepository;
}
