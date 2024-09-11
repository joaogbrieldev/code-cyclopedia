/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  IPaginatedResult,
  IRepositoryBase,
} from 'libs/shared/domain/contracts/infrastructure/repository/repository.base';
import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';
import { DeepPartial, EntityTarget, Repository, UpdateResult } from 'typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

export abstract class BaseRepositoryPostgresAdapter<
  DomainModel extends IEntityBase,
  RepositoryModel,
> implements IRepositoryBase<DomainModel>
{
  protected repository: Repository<DomainModel>;
  protected constructor(
    repository: Repository<RepositoryModel>,
    target: EntityTarget<DomainModel>,
  ) {
    this.repository = repository.manager.getRepository(target);
  }

  abstract mapToDomain(normalizedPersistencyObject: any): DomainModel;

  normalize<NonNormalizedItem, NormalizedItem>(
    _persistencyObject: NonNormalizedItem,
  ): NormalizedItem {
    throw new Error('Not implemented yet');
  }

  private _mapSelectFromStringListToObject(selectedFields: string[]): object {
    const fields: string[] =
      (Array.isArray(selectedFields) && selectedFields) || [];
    return fields.reduce((acc: object, curr: string) => {
      acc[curr] = true;
      return acc;
    }, {});
  }

  private _mapRelationsFrompopulateObject(populate: string[]): object {
    const fields: string[] = (Array.isArray(populate) && populate) || [];
    return fields.reduce((acc: object, curr: string) => {
      acc[curr] = true;
      return acc;
    }, {});
  }

  async create(
    data: DomainModel,
    transactionSession: any = null,
  ): Promise<DomainModel> {
    const recordDb: DomainModel = await this.repository.save(data, {
      transaction: transactionSession,
    });
    return this.mapToDomain(recordDb);
  }

  async deleteMany(filter: any, transactionSession: any): Promise<void> {
    const entities: DomainModel[] = await this.repository.find({
      where: filter,
    });
    if (!entities.length) return;
    await this.repository.remove(entities, { transaction: transactionSession });
  }

  async deleteOne(query: any, transactionSession: any): Promise<void> {
    const entity: DomainModel = await this.repository.findOne({
      where: { ...query },
    });
    if (entity)
      await this.repository.remove(entity, { transaction: transactionSession });
  }

  async delete(id: any, transactionSession?: any): Promise<void> {
    const entity: DomainModel = await this.repository.findOne({
      where: { id },
    });
    if (entity)
      await this.repository.remove(entity, { transaction: transactionSession });
  }

  async exists(filter: Record<string, any>): Promise<boolean> {
    const total: number = await this.repository.countBy(filter);
    return !!total;
  }

  async get(
    id: any,
    select?: string[],
    populate?: string[],
    shouldLoadRelations?: boolean,
  ): Promise<DomainModel> {
    const selectObject: object = this._mapSelectFromStringListToObject(select);
    const relationsObject: object =
      (populate && this._mapRelationsFrompopulateObject(populate)) || null;
    const opts: object = {
      where: { id },
      select: selectObject,
      loadEagerRelations: true,
    };
    if (relationsObject) opts['relations'] = relationsObject;
    if (shouldLoadRelations) opts['loadRelationIds'] = true;
    const result: DomainModel = await this.repository.findOne(opts);
    return this.mapToDomain(result);
  }

  async getOne(
    filter: FindOptionsWhere<DomainModel>,
    select?: string[],
    populate?: string[],
    shouldLoadRelations?: boolean,
  ): Promise<DomainModel> {
    const selectObject: object = this._mapSelectFromStringListToObject(select);
    const relationsObject: object =
      (populate && this._mapRelationsFrompopulateObject(populate)) || null;
    const opts: object = {
      where: filter,
      select: selectObject,
      loadEagerRelations: true,
    };
    if (relationsObject) opts['relations'] = relationsObject;
    if (shouldLoadRelations) opts['loadRelationIds'] = true;
    const result: DomainModel = await this.repository.findOne(opts);
    return this.mapToDomain(result);
  }

  async paginate(
    page: number = 1,
    limit: number = 25,
    query: FindOptionsWhere<DomainModel> | FindOptionsWhere<DomainModel>[],
    select?: string[],
    populate?: string[],
  ): Promise<IPaginatedResult<DomainModel>> {
    const selectObject: object = this._mapSelectFromStringListToObject(select);
    const relationsObject: object =
      this._mapRelationsFrompopulateObject(populate);
    const result: DomainModel[] = await this.repository.find({
      where: query,
      select: selectObject,
      relations: { ...relationsObject },
      skip: page - 1,
      take: limit,
      loadEagerRelations: true,
    });
    const totalDocs: number = await this.repository.countBy(query);
    const totalPages: number = this._getTotalPages(totalDocs, limit);
    const hasNexPage: boolean = totalPages > page;
    return {
      docs: result.map((item: DomainModel) => this.mapToDomain(item)),
      limit,
      currentPage: page,
      nextPage: hasNexPage ? page++ : page,
      totalPages,
      totalDocs,
      hasNext: hasNexPage,
    };
  }

  private _getTotalPages(totalDocs: number, limit: number): number {
    if (totalDocs <= limit) return 1;
    return Math.ceil(totalDocs / limit);
  }

  async update(
    id: string,
    data: DeepPartial<any>,
    transactionSession?: any,
  ): Promise<boolean> {
    const response: UpdateResult = await this.repository.update(id, {
      ...data,
    });
    return !!response.affected;
  }

  async updateMany(
    filter: any,
    data: Partial<any>,
    transactionSession: any,
  ): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await this.repository.update(filter, { ...data });
  }

  async getMany(
    query: any,
    select?: string[],
    populate?: string[],
  ): Promise<DomainModel[]> {
    const relations: object = this._mapRelationsFrompopulateObject(populate);
    const selection: object = this._mapSelectFromStringListToObject(select);
    const response: DomainModel[] = await this.repository.find({
      where: query ?? {},
      select: selection,
      relations,
      loadEagerRelations: true,
    });
    return response.map<DomainModel>((item: DomainModel) =>
      this.mapToDomain(item),
    );
  }

  async findAll(): Promise<DomainModel[]> {
    return this.repository.find();
  }
}
