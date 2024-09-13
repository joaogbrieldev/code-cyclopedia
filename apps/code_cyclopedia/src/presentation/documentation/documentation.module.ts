import { Module } from '@nestjs/common';
import { CreateDocumentationController } from './create-documentation/create-documentation.controller';

@Module({
  imports: [CreateDocumentationController],
})
export class DocumentationModule {}
