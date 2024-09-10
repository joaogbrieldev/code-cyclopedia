import { UserDto } from '@code_cyclopedia/data/queries/get-user/get-user.dto';
import { IGetUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/get-user';
import { Controller, Get } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

@Controller('get-users')
export class GetUsersController {
  constructor(private readonly getUsersUseCase: IGetUserUseCase) {}
  @Get('/')
  @ApiHeader({
    name: 'Content-Type',
    required: true,
    enum: ['application/json'],
  })
  async handle(): Promise<UserDto> {
    return this.getUsersUseCase.execute();
  }
}
