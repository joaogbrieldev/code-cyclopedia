import { Documentation } from '@code_cyclopedia/domain/models/entities/documentation';
import { IRepositoryBase } from 'libs/shared/domain/contracts/infrastructure/repository/repository.base';

export abstract class IDocumentationRepository extends IRepositoryBase<Documentation> {}
