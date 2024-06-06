import { Controller, Get } from '@nestjs/common';
import { ManagmentService } from './managment.service';

@Controller()
export class ManagmentController {
  constructor(private readonly managmentService: ManagmentService) {}

  @Get()
  getHello(): string {
    return this.managmentService.getHello();
  }
}
