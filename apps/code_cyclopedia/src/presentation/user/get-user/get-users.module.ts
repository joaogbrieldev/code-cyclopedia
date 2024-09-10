import { GetUserDataModule } from '@code_cyclopedia/data/use-cases/user/get-user/get-user.module';
import { Module } from '@nestjs/common';
import { GetUsersController } from './get-users.controller';

@Module({
  imports: [GetUserDataModule],
  controllers: [GetUsersController],
})
export class GetUsersModule {}
