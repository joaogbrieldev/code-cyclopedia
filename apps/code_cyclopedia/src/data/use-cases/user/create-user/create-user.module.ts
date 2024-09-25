import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { UserRepositoryModule } from '@code_cyclopedia/infrastructure/db/postgres/user/user-repository.module';
import { Module, Provider } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.use-case';

export const createUserProvider: Provider = {
  provide: ICreateUser,
  useClass: CreateUserUseCase,
};

@Module({
  providers: [createUserProvider],
  imports: [
    UserRepositoryModule,
    //   ClientsModule.register([
    //     {
    //       name: 'CODE_CYCLOPEDIA_SERVICE',
    //       transport: Transport.KAFKA,
    //       options: {
    //         client: {
    //           clientId: 'code_cyclopedia',
    //           brokers: ['kafka:29092'],
    //         },
    //       },
    //     },
    //   ]),
  ],
  exports: [createUserProvider],
})
export class CreateUserDataModule {}
