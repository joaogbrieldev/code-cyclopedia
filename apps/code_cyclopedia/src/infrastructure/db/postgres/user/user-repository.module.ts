import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { getDataSourceName } from '@code_cyclopedia/infrastructure/config/typeorm.config';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { UserModel } from './user.model';
import { UserRepositoryAdapter } from './user.repository';

const userRepositoryProvider: Provider = {
  provide: IUserRepository,
  useClass: UserRepositoryAdapter,
};

const models: EntityClassOrSchema[] = [UserModel];

@Module({
  imports: [TypeOrmModule.forFeature([...models], getDataSourceName())],
  providers: [userRepositoryProvider],
  exports: [userRepositoryProvider],
})
export class UserRepositoryModule {}
