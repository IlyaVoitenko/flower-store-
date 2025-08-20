import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [FlowersModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
