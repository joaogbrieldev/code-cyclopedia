import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserDto } from './get-user.dto';

export class GetUserQuery {
  id: string;
}

@QueryHandler(GetUserHandler)
export class GetUserHandler implements IQueryHandler<GetUserQuery, UserDto> {
  execute(query: GetUserQuery): Promise<UserDto> {
    console.log(query);
    throw new Error('Method not implemented.');
  }
}
