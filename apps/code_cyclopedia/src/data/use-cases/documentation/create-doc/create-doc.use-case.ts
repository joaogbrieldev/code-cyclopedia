import {
  ICreateDocumentationInput,
  ICreateDocumentationUseCase,
} from '@code_cyclopedia/domain/contracts/use-cases/documentation/create-documentation';
import { ICreateDocumentationCommand } from '@code_cyclopedia/domain/cqrs/create-doc';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class CreateDocumentationUseCase implements ICreateDocumentationUseCase {
  constructor(private commandBus: CommandBus) {}
  async execute(input: ICreateDocumentationInput): Promise<void> {
    await this.commandBus.execute(
      new ICreateDocumentationCommand(input.userId, input.body),
    );
  }
}
