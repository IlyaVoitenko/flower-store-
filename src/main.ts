import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { optionsConfig } from './config/microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);

  const microserviceApp =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        host: optionsConfig.options?.host,
        port: optionsConfig.options?.port,
      },
    });
  await microserviceApp.listen();
  console.log(
    'microservice is listening on port: ',
    optionsConfig.options?.port,
  );
}
bootstrap();
