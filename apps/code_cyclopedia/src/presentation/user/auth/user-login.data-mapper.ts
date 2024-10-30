import { Injectable } from '@nestjs/common';
import { UserLoginOutputDto } from './dto/user-login-output.dto';


@Injectable()
export class UserLoginDataMapper
{
  mapOutputDto(token: string, username: string, id: string): Readonly<UserLoginOutputDto> {
    return new UserLoginOutputDto(token, username, id);
  }
}
