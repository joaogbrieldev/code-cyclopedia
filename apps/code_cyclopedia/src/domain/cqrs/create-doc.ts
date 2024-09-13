import { ICommand } from '@nestjs/cqrs';

export class ICreateDocumentationCommand implements ICommand {
  constructor(
    public readonly userId: string,
    public readonly body: string,
  ) {}
}
