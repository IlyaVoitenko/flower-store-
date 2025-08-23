import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FlowersCreateDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from '../types';
@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prisma.flower.findMany();
  }

  createFlower(dto: FlowersCreateDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
