import { GetAllUsersQueryHandler } from '@code_cyclopedia/data/queries/get-user/get-user-query-handler';
import { GetUserDataModule } from '@code_cyclopedia/data/use-cases/user/get-user/get-user.module';
import { UserRepositoryModule } from '@code_cyclopedia/infrastructure/db/postgres/user/user-repository.module';
import { Module } from '@nestjs/common';
import { GetUsersController } from './get-users.controller';

@Module({
  imports: [GetUserDataModule, UserRepositoryModule],
  providers: [GetAllUsersQueryHandler],
  controllers: [GetUsersController],
})
export class GetUsersModule {}
