import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CodeCyclopediaModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeCyclopediaModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: ['http://localhost:3000'] });
  await app.listen(3001);
}
bootstrap();
