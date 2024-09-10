import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {
  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  documentations: IDocumentation[];

  @Expose()
  repository: IRepository;
}
