import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { EntityBase } from '../../../../../../libs/shared/domain/data/entities/entity-base';

export class User extends EntityBase implements IUser {
  constructor(props: IUser) {
    super();
    Object.assign(this, props);
  }
  id: string;
  username: string;
  email: string;
  password: string;
  repository: IRepository;
}
