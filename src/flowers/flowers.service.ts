import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FlowersCreateDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  findAll() {
    console.log(this.configService.get('MODE'));
    this.prisma.flower.findMany();
  }

  createFlower(dto: FlowersCreateDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
