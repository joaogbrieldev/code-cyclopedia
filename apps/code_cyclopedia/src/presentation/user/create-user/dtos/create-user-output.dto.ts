import { ApiProperty } from '@nestjs/swagger';

export class CreateUserOutputDto {
  @ApiProperty()
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
