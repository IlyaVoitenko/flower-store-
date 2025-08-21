import { Transport, TcpClientOptions } from '@nestjs/microservices';
export const optionsConfig: TcpClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 8877,
  },
};
