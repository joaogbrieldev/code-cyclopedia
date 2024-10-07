import { UserLoginDataModule } from '@code_cyclopedia/data/use-cases/user/auth/user-login.module';
import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login.controller';
import { UserLoginDataMapper } from './user-login.data-mapper';

@Module({
  imports: [UserLoginDataModule],
  providers: [UserLoginDataMapper],
  controllers: [UserLoginController],
})
export class UserLoginModule {}
