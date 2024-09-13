import { IDocumentationRepository } from '@code_cyclopedia/domain/contracts/repositories/documentation.repository';
import { Documentation } from '@code_cyclopedia/domain/models/entities/documentation';
import { getDataSourceName } from '@code_cyclopedia/infrastructure/config/typeorm.config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepositoryPostgresAdapter } from 'libs/shared/infrastructure/db/postgres/base-repository.adapter';
import { Repository } from 'typeorm';
import { DocumentationModel } from './documentation.model';

@Injectable()
export class DocumentationRepositoryAdapter
  extends BaseRepositoryPostgresAdapter<Documentation, DocumentationModel>
  implements IDocumentationRepository
{
  constructor(
    @InjectRepository(DocumentationModel, getDataSourceName())
    private readonly _userRepository: Repository<DocumentationModel>,
  ) {
    super(_userRepository, DocumentationModel);
  }

  mapToDomain(normalizedPersistencyObject: DocumentationModel): Documentation {
    if (!normalizedPersistencyObject) return null;

    return new Documentation({
      ownerUser: normalizedPersistencyObject.ownerUser,
      body: normalizedPersistencyObject.body,
    });
  }
}
