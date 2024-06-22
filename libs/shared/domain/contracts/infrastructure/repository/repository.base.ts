import { DeepPartial } from 'libs/shared/domain/@types/types';
import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';

export interface IPaginatedResult<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  nextPage: number;
  hasNext: boolean;
  limit: number;
}

export abstract class IRepositoryBase<DomainModel extends IEntityBase> {
  abstract normalize<NonNormalizedItem = any, NormalizedItem = any>(
    persistencyObject: NonNormalizedItem,
  ): NormalizedItem;

  abstract mapToDomain(normalizedPersistencyObject: any): DomainModel;

  abstract create(
    data: DomainModel,
    transactionSession?: any,
  ): Promise<DomainModel>;
  abstract update(
    id: string,
    data: DeepPartial<DomainModel>,
    transactionSession?: any,
  ): Promise<boolean>;
  abstract updateMany(
    filter: any,
    data: Partial<DomainModel>,
    transactionSession?: any,
  ): Promise<void>;
  abstract delete(id: string, transactionSession?: any): Promise<void>;
  abstract deleteOne(query: any, transactionSession?: any): Promise<void>;
  abstract deleteMany(filter: any, transactionSession?: any): Promise<void>;
  abstract exists(filter: Record<string, any>): Promise<boolean>;
  abstract get(
    id: string,
    select?: string[],
    populate?: any,
  ): Promise<DomainModel>;
  abstract getMany(
    query: any,
    select?: string[],
    populate?: any,
  ): Promise<DomainModel[]>;
  abstract paginate(
    page: number,
    limit: number,
    query: any,
    select?: string[],
    populate?: any,
  ): Promise<IPaginatedResult<DomainModel>>;
  abstract getOne(
    filter: any,
    select?: string[],
    opulate?: string[],
    shouldLoadRelations?: boolean,
  ): Promise<DomainModel>;
}
