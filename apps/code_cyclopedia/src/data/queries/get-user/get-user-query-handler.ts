import { IUserRepository } from '@code_cyclopedia/domain/contracts/repositories/user.repository';
import { GetAllUsersQuery } from '@code_cyclopedia/domain/cqrs/get-user';
import { User } from '@code_cyclopedia/domain/models/entities/user';
import { Inject, Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserDto } from './get-user.dto';

export type Output = {
  data: UserDto[];
};

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler
  implements IQueryHandler<GetAllUsersQuery>
{
  logger = new Logger(GetAllUsersQueryHandler.name);

  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(): Promise<Output> {
    this.logger.log('[GetAllUsersQueryHandler] Executing query...');
    const users = await this.userRepository.findAll();
    return {
      data: users.map((item) => new User(item)),
    };
  }
}
