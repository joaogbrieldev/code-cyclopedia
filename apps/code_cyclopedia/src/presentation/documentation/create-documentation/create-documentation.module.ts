import { CreateDocumentationCommandHandler } from '@code_cyclopedia/data/commands/create-doc.command-handler';
import { CreateDocumentationDataModule } from '@code_cyclopedia/data/use-cases/documentation/create-doc/create-doc.module';
import { DocumentationRepositoryModule } from '@code_cyclopedia/infrastructure/db/postgres/documentation/documentation.module';
import { Module } from '@nestjs/common';
import { CreateDocumentationController } from './create-documentation.controller';

@Module({
  imports: [CreateDocumentationDataModule, DocumentationRepositoryModule],
  providers: [CreateDocumentationCommandHandler],
  controllers: [CreateDocumentationController],
})
export class CreateDocumentationModule {}
