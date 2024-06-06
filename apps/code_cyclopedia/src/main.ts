import { NestFactory } from '@nestjs/core';
import { CodeCyclopediaModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeCyclopediaModule);
  await app.listen(3000);
}
bootstrap();
