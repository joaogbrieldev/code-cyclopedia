import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class DocumentationDto {
  @Expose()
  body: string;

  @Expose()
  ownerUser: string;

  constructor(input: IDocumentation) {
    this.body = input.body;
    this.ownerUser = input.ownerUser;
  }
}
