import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInputDto {
  @ApiProperty({ type: String, required: false })
  id: string;

  @ApiProperty({ type: String, required: false })
  email: string;

  @ApiProperty({ type: String, required: false })
  username: string;

  @ApiProperty({ type: String, required: false })
  password: string;

  @ApiProperty({ type: Array, required: false })
  documentations: IDocumentation[];
}
