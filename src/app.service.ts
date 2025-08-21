import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { optionsConfig } from './config/microservice.config';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: optionsConfig.transport,
      options: optionsConfig.options,
    });
  }

  sendMessage() {
    this.client.emit('message', 'new order 1244343');
  }
}
