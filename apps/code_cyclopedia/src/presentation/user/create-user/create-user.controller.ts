import { IController } from '@code_cyclopedia/domain/contracts/presentation/controller';
import {
  IHttpResponse,
  ok,
} from '@code_cyclopedia/domain/contracts/presentation/http';
import { ICreateUser } from '@code_cyclopedia/domain/contracts/use-cases/user/create-user';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { CreateUserDataMapper } from './create-user.data-mapper';
import { CreateUserInputDto } from './dtos/create-user-input.dto';
import { CreateUserOutputDto } from './dtos/create-user-output.dto';

@Controller('users')
export class CreateUserController
  implements IController<CreateUserInputDto, CreateUserOutputDto>
{
  constructor(
    private readonly createUserUseCase: ICreateUser,
    private readonly createUserDataMapper: CreateUserDataMapper,
  ) {}
  @Post('/create-user')
  @ApiHeader({
    name: 'Content-Type',
    required: true,
    enum: ['application/json'],
  })
  @ApiBody({ type: CreateUserInputDto })
  @ApiOkResponse({ type: CreateUserOutputDto })
  async handle(
    @Body() input: CreateUserInputDto,
  ): Promise<IHttpResponse<CreateUserOutputDto>> {
    try {
      const { id, email, username, password } = input;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const response = await this.createUserUseCase.execute({
        id,
        password: hash,
        email,
        username,
      });
      const output: Readonly<CreateUserOutputDto> =
        this.createUserDataMapper.mapOutputDto(response.id);
      return ok(output);
    } catch (error) {
      console.log(error);
    }
  }
}
