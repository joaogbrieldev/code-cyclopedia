import { ApiProperty } from '@nestjs/swagger';

export class UserLoginOutputDto {
  @ApiProperty()
  token: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  id: string;

  constructor(token: string, username: string, id: string) {
    this.token = token;
    this.username = username;
    this.id = id;
  }
}
