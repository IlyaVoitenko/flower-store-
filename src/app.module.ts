import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlowersModule } from './flowers/flowers.module';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { optionsConfig } from './config/microservice.config';

@Module({
  imports: [
    FlowersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'ORDER-SERVICE',
        transport: optionsConfig.transport,
        options: optionsConfig.options,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
