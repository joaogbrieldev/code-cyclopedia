import { IDomainEvent } from './domain-event';

export abstract class IEventDispatcher {
  abstract dispatchEvent<T>(domainEvent: IDomainEvent<T>): void;
}
