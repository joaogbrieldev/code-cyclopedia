import { IEntityBase } from '../../models/entities/entity-base';

export class EntityBase implements IEntityBase {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  static isEntity(value: any): boolean {
    return value instanceof EntityBase;
  }
}
