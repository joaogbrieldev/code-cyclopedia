import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { UserRepositoryAdapter } from './user.repository';

const userRepositoryProvider: Provider = {
  provide: IUserRepository,
  useClass: UserRepositoryAdapter,
};

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserModel]), // Certifique-se de que o UserModel é registrado aqui
  ],
  providers: [userRepositoryProvider],
  exports: [userRepositoryProvider], // Certifique-se de exportar o provedor
})
export class UserRepositoryModule {}
