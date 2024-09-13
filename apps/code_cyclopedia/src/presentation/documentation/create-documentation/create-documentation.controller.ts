import { ICreateDocumentationUseCase } from '@code_cyclopedia/domain/contracts/use-cases/documentation/create-documentation';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

@Controller('documentation')
export class CreateDocumentationController {
  constructor(
    private createDocumentationUseCase: ICreateDocumentationUseCase,
  ) {}
  @Post('/')
  @ApiHeader({
    name: 'Content-Type',
    required: true,
    enum: ['application/json'],
  })
  async handle(@Body() input): Promise<void> {
    await this.createDocumentationUseCase.execute(input);
  }
}
