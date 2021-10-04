import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { useContainer } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // permite que a class-validater user injeção de dependencia
  await app.listen(3000);
}
bootstrap();
