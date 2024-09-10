import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { Inject, Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserDto } from './get-user.dto';
import { GetAllUsersQuery } from './get-user.query';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler
  implements IQueryHandler<GetAllUsersQuery>
{
  logger = new Logger(GetAllUsersQueryHandler.name);
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}
  async execute(_: GetAllUsersQuery): Promise<UserDto> {
    this.logger.log('[GetAllUsersQueryHandler] Executing query...');
    const users = await this.userRepository.getAll();
    return users;
  }
}
