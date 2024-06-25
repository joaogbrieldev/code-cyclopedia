import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';
import { CreateUserModule } from './presentation/user/create-user/create-user.module'; // Corrigido para importar o módulo

@Module({
  imports: [
    PostgresModule,
    CreateUserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
})
export class CodeCyclopediaModule {}
