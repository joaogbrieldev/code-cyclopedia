import { UserLoginUseCase } from '@code_cyclopedia/data/use-cases/user/auth/user-login.use-case';
import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login.controller';

@Module({
  providers: [UserLoginUseCase],
  controllers: [UserLoginController],
})
export class UserLoginModule {}
