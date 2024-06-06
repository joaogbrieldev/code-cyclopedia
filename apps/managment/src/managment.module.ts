import { Module } from '@nestjs/common';
import { ManagmentController } from './managment.controller';
import { ManagmentService } from './managment.service';

@Module({
  imports: [],
  controllers: [ManagmentController],
  providers: [ManagmentService],
})
export class ManagmentModule {}
