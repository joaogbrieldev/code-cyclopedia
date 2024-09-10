import { CreateUserDataModule } from '@code_cyclopedia/data/use-cases/user/create-user/create-user.module';
import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserDataMapper } from './create-user.data-mapper';

@Module({
  imports: [CreateUserDataModule],
  providers: [CreateUserDataMapper],
  controllers: [CreateUserController],
})
export class CreateUserModule {}
