import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlowersModule } from './flowers/flowers.module';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { optionsConfig } from './config/microservice.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { FlowersGraphqlModule } from './flowers-graphql/flowers-graphql.module';
import { WebsocketGateway } from './websocket.gateway';

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
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    FlowersGraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
