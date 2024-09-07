import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CodeCyclopediaModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeCyclopediaModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
