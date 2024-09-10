import { UserDto } from '@code_cyclopedia/data/queries/get-user/get-user.dto';
import { IController } from '@code_cyclopedia/domain/contracts/presentation/controller';
import { IHttpResponse } from '@code_cyclopedia/domain/contracts/presentation/http';
import { IGetUserUseCase } from '@code_cyclopedia/domain/contracts/use-cases/user/get-user';
import { Controller, Get } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

@Controller('get-users')
export class GetUsersController implements IController<any, UserDto> {
  constructor(private readonly getUsersUseCase: IGetUserUseCase) {}
  @Get('/')
  @ApiHeader({
    name: 'Content-Type',
    required: true,
    enum: ['application/json'],
  })
  async handle(user: UserDto): Promise<IHttpResponse<UserDto>> {
    throw new Error('Method not implemented.');
  }
}
