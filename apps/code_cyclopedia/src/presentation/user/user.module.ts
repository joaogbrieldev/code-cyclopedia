import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { UpdateUserController } from './update-user/update-user.controller';

@Module({
  imports: [CreateUserController, UpdateUserController],
})
export class UserModule {}
