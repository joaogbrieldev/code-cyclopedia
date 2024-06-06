import { ApiProperty } from '@nestjs/swagger';

export class CreateUserOutputDto {
  @ApiProperty()
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }
}
