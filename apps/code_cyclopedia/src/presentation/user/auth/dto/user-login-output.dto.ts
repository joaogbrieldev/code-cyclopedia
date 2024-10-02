import { ApiProperty } from '@nestjs/swagger';

export class UserLoginOutputDto {
  @ApiProperty()
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}
