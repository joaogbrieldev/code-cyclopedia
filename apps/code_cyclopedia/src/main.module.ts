import { Module } from '@nestjs/common';
import { PostgresModule } from './infrastructure/db/postgres/postgres.module';

@Module({
  imports: [PostgresModule],
})
export class CodeCyclopediaModule {}
