import { ICommand } from '@nestjs/cqrs';
import { ICreateDocumentationInput } from '../contracts/use-cases/documentation/create-documentation';

export class ICreateDocumentationCommand implements ICommand {
  constructor(public readonly command: ICreateDocumentationInput) {}
}
