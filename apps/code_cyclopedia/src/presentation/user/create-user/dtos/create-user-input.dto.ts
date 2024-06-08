import { IRepository } from '@code_cyclopedia/domain/contracts/entities/repository';
import { ApiProperty } from '@nestjs/swagger';
import { Entity } from 'typeorm';

export class CreateUserInputDto {
  @ApiProperty({ type: String, required: false })
  email: string;

  @ApiProperty({ type: String, required: false })
  username: string;

  @ApiProperty({ type: String, required: false })
  password: string;

  @ApiProperty({ type: Entity, required: false })
  repository: IRepository;
}
