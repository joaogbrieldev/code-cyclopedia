import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserDataMapper } from './create-user.data-mapper';

@Module({
  imports: [],
  providers: [CreateUserDataMapper],
  controllers: [CreateUserController],
})
export class CreateUserModule {}
