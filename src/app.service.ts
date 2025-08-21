import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { optionsConfig } from './microservice.config';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: optionsConfig,
    });
  }

  sendMessage() {
    this.client.emit('message', 'new order 1244343');
  }
}
