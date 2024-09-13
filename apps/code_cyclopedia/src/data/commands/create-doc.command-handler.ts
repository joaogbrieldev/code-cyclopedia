import { IDocumentationRepository } from '@code_cyclopedia/domain/contracts/repositories/documentation.repository';
import { ICreateDocumentationCommand } from '@code_cyclopedia/domain/cqrs/create-doc';
import { Documentation } from '@code_cyclopedia/domain/models/entities/documentation';
import { Inject, Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(ICreateDocumentationCommand)
export class CreateDocumentationCommandHandler
  implements ICommandHandler<ICreateDocumentationCommand>
{
  logger = new Logger(CreateDocumentationCommandHandler.name);
  constructor(
    @Inject(IDocumentationRepository)
    private documentationRepository: IDocumentationRepository,
  ) {}
  async execute({ command }: ICreateDocumentationCommand): Promise<void> {
    this.logger.log('[CreateDocumentation] Executing handler');
    const documentation: Documentation = new Documentation({
      ownerUser: command.userId,
      body: command.body,
    });

    await this.documentationRepository.create(documentation);
  }
}
