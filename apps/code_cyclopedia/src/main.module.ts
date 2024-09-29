import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';

import { CreateDocumentationModule } from './presentation/documentation/create-documentation/create-documentation.module';
import { UserLoginModule } from './presentation/user/auth/user-login.module';
import { CreateUserModule } from './presentation/user/create-user/create-user.module';
import { GetUsersModule } from './presentation/user/get-user/get-users.module';

@Module({
  imports: [
    PostgresModule,
    CreateUserModule,
    CreateDocumentationModule,
    GetUsersModule,
    UserLoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],

  controllers: [],
})
export class CodeCyclopediaModule {}
