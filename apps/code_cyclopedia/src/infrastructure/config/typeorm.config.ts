import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { config } from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { UserModel } from '../db/postgres/user/user.model';

export const getDataSourceName = (): string => 'default';

config({ path: './apps/checktudo/.env' });

export const allModels: EntityClassOrSchema[] = [UserModel];

export default new DataSource({
  type: 'postgres',
  schema: process.env.POSTGRES_SCHEMA,
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [...allModels],
  migrations: [path.join(__dirname, '../db/postgres/migrations/*.{js,ts}')],
});
