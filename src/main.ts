import { TransformInterceptor } from './interceptors/transform.interceptor';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  initSwagger(app);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors();
  await app.listen(process.env.APP_PORT);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
