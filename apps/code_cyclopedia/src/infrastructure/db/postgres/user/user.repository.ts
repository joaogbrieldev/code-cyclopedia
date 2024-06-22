import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { getDataSourceName } from '@code_cyclopedia/infrastructure/config/typeorm.config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepositoryPostgresAdapter } from 'libs/shared/infrastructure/db/postgres/base-repository.adapter';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';

@Injectable()
export class UserRepositoryAdapter
  extends BaseRepositoryPostgresAdapter<User, UserModel>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserModel, getDataSourceName())
    private readonly _userRepository: Repository<UserModel>,
  ) {
    super(_userRepository, UserModel);
  }

  mapToDomain(normalizedPersistencyObject: UserModel): User {
    if (!normalizedPersistencyObject) return null;

    return new User({
      id: normalizedPersistencyObject.id,
      email: normalizedPersistencyObject.email,
      username: normalizedPersistencyObject.username,
      password: normalizedPersistencyObject.password,
      createdAt: normalizedPersistencyObject.createdAt,
      updatedAt: normalizedPersistencyObject.updatedAt,
      repository: normalizedPersistencyObject.repository,
    });
  }
}
