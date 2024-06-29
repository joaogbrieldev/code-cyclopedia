import { DeepPartial } from 'libs/shared/domain/@types/types';
import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';

export type EventType = string;

export interface IDomainEvent<TAggregate extends IEntityBase> {
  name: Required<Readonly<string>>;
  tenant: Required<Readonly<string>>;
  streamId: Required<Readonly<string>>;
  type: Required<Readonly<EventType>>;
  payload: DeepPartial<TAggregate>;
  occurredAt: Required<Readonly<Date>>;
}

export abstract class DomainEvent<Aggregate extends IEntityBase = any>
  implements IDomainEvent<Aggregate>
{
  name: Required<Readonly<string>>;
  tenant: Required<Readonly<string>>;
  streamId: Required<Readonly<string>>;
  type: Required<Readonly<EventType>>;
  payload: DeepPartial<Aggregate>;
  occurredAt: Required<Readonly<Date>>;
  protected constructor(
    name: string,
    tenant: string,
    type: EventType,
    aggregateId: string,
    payload: DeepPartial<Aggregate>,
  ) {
    this.name = name;
    this.tenant = tenant;
    this.streamId = aggregateId;
    this.type = type;
    this.occurredAt = new Date();
    this.payload = payload;
  }
}
