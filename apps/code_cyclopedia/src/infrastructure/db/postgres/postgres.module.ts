import { UserModel } from './user/user.model';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (envService: ConfigService) => ({
        type: 'postgres',
        port: +envService.get<number>('POSTGRES_PORT'),
        host: envService.get<string>('POSTGRES_HOST'),
        username: envService.get<string>('POSTGRES_USER'),
        password: envService.get<string>('POSTGRES_PASSWORD'),
        database: envService.get<string>('POSTGRES_DATABASE'),
        schema: envService.get<string>('POSTGRES_SCHEMA'),
        synchronize: true,
        logging: false,
        autoLoadEntities: false,
        entities: [UserModel],
      }),
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
