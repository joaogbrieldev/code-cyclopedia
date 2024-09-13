import { IDocumentationRepository } from '@code_cyclopedia/domain/contracts/repositories/documentation.repository';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentationModel } from './documentation.model';
import { DocumentationRepositoryAdapter } from './documentation.repository';

const documentationRepositoryProvider: Provider = {
  provide: IDocumentationRepository,
  useClass: DocumentationRepositoryAdapter,
};

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([DocumentationModel])],
  providers: [documentationRepositoryProvider],
  exports: [documentationRepositoryProvider],
})
export class DocumentationRepositoryModule {}
