import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DocumentationModel } from './documentation/documentation.model';
import { RepositoryModel } from './repository/repository.model';
import { UserModel } from './user/user.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (envService: ConfigService) => {
        const dbName = envService.get<string>('POSTGRES_DATABASE');
        console.log(`Conectando ao banco de dados: ${dbName}`);
        return {
          type: 'postgres',
          port: +envService.get<number>('POSTGRES_PORT'),
          host: envService.get<string>('POSTGRES_HOST'),
          username: envService.get<string>('POSTGRES_USER'),
          password: envService.get<string>('POSTGRES_PASSWORD'),
          database: dbName,
          schema: envService.get<string>('POSTGRES_SCHEMA'),
          synchronize: true,
          logging: false,
          autoLoadEntities: false,
          entities: [UserModel, RepositoryModel, DocumentationModel],
        };
      },

      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource({
          ...options,
          migrations: ['./migrations/*.{js,ts}'],
          name: 'default',
        }).initialize();
      },
    }),
  ],
})
export class PostgresModule {}
