import { NestFactory } from '@nestjs/core';
import { ManagmentModule } from './managment.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagmentModule);
  await app.listen(3000);
}
bootstrap();
