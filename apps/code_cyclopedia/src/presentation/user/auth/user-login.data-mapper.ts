import { Injectable } from '@nestjs/common';
import { IDataMapper } from 'libs/shared/domain/contracts/presentation/data-mapper';
import { UserLoginOutputDto } from './dto/user-login-output.dto';

@Injectable()
export class UserLoginDataMapper
  implements IDataMapper<string, UserLoginOutputDto>
{
  mapOutputDto(id: string): Readonly<UserLoginOutputDto> {
    return new UserLoginOutputDto(id);
  }
}
