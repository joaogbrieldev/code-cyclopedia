import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';

import { CreateDocumentationModule } from './presentation/documentation/create-documentation/create-documentation.module';
import { CreateUserModule } from './presentation/user/create-user/create-user.module';
import { GetUsersModule } from './presentation/user/get-user/get-users.module';

@Module({
  imports: [
    PostgresModule,
    CreateUserModule,
    CreateDocumentationModule,
    GetUsersModule,
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
