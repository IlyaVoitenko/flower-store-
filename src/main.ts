import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { optionsConfig } from './config/microservice.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Flowers API')
    .setDescription('The flowers API description')
    .setVersion('1.0')
    .addTag('flowers')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
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
