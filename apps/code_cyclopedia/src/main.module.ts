import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';
import { CreateUserModule } from './presentation/user/create-user/create-user.module'; // Corrigido para importar o módulo

@Module({
  imports: [
    PostgresModule,
    CreateUserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'CODE_CYCLOPEDIA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'code_cyclopedia',
            brokers: ['kafka:29092'],
          },
        },
      },
    ]),
  ],
  controllers: [],
})
export class CodeCyclopediaModule {}
