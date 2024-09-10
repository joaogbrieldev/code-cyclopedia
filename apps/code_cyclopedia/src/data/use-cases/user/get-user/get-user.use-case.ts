import { UserDto } from '@code_cyclopedia/data/queries/get-user/get-user.dto';
import { GetAllUsersQuery } from '@code_cyclopedia/data/queries/get-user/get-user.query';

import { IGetUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/get-user';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Injectable()
export class GetUserUseCase implements IGetUserUseCase {
  constructor(private queryBus: QueryBus) {}
  async execute(): Promise<UserDto> {
    return await this.queryBus.execute(new GetAllUsersQuery());
  }
}
