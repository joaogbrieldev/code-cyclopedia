import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { GetUsersController } from './get-user/get-users.controller';

@Module({
  imports: [CreateUserController, GetUsersController],
})
export class UserModule {}
