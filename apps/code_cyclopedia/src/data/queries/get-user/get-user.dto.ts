import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { IUser } from '@code_cyclopedia/domain/contracts/entities/user';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {
  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  documentations: IDocumentation[];

  constructor(input: IUser) {
    this.username = input.username;
    this.documentations = input.documentations;

    this.email = input.email;
  }
}
