import { ICreateDocumentationUseCase } from '@code_cyclopedia/domain/contracts/use-cases/documentation/create-documentation';
import { Module, Provider } from '@nestjs/common';
import { CreateDocumentationUseCase } from './create-doc.use-case';

export const createDocumentationProvider: Provider = {
  provide: ICreateDocumentationUseCase,
  useClass: CreateDocumentationUseCase,
};

@Module({
  imports: [],
  providers: [createDocumentationProvider],
  exports: [createDocumentationProvider],
})
export class CreateDocumentationDataModule {}
