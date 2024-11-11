import { IController } from '@code_cyclopedia/domain/contracts/presentation/controller';
import {
  IHttpResponse,
  ok,
} from '@code_cyclopedia/domain/contracts/presentation/http';
import {
  IUserLoginInput,
  IUserLoginUseCase,
} from '@code_cyclopedia/domain/contracts/use-cases/auth/user-login';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { UserLoginOutputDto } from './dto/user-login-output.dto';
import { UserLoginDataMapper } from './user-login.data-mapper';

@Controller('/auth')
export class UserLoginController
  implements IController<IUserLoginInput, UserLoginOutputDto>
{
  constructor(
    private readonly userLoginUseCase: IUserLoginUseCase,
    private readonly userLoginDataMapper: UserLoginDataMapper,
  ) {}
  @Post('/')
  @ApiHeader({
    name: 'Content-Type',
    required: true,
    enum: ['application/json'],
  })
  async handle(
    @Body() input: IUserLoginInput,
  ): Promise<IHttpResponse<UserLoginOutputDto | Error>> {
    try {
      const { email, password } = input;
      const response = await this.userLoginUseCase.execute({
        email,
        password,
      });
      const output: Readonly<UserLoginOutputDto> =
        this.userLoginDataMapper.mapOutputDto(
          response.token,
          response.username,
          response.id,
        );
      return ok(output);
    } catch (error) {
      throw new Error(error);
    }
  }
}
