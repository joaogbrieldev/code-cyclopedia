import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagmentService {
  getHello(): string {
    return 'Hello World!';
  }
}
