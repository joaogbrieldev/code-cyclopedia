import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { Exclude, Expose } from 'class-transformer';

export class GetUserQuery {
  id: string;
}

@Exclude()
export class UserDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  documentations: IDocumentation[];

  @Expose()
  epository: IRepository;
}
