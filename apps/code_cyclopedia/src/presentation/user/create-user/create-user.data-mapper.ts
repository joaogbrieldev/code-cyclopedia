import { Injectable } from '@nestjs/common';
import { IDataMapper } from 'libs/shared/domain/contracts/presentation/data-mapper';
import { CreateUserOutputDto } from './dtos/create-user-output.dto';

@Injectable()
export class CreateUserDataMapper
  implements IDataMapper<string, CreateUserOutputDto>
{
  mapOutputDto(userId: string): Readonly<CreateUserOutputDto> {
    return new CreateUserOutputDto(userId);
  }
}
