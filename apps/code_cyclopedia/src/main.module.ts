import { Module } from '@nestjs/common';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';
import { CreateUserModule } from './presentation/user/create-user/create-user.module'; // Corrigido para importar o módulo

@Module({
  imports: [PostgresModule, CreateUserModule], // Importando o módulo completo
  controllers: [],
})
export class CodeCyclopediaModule {}
