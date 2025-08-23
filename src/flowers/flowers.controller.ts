import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersCreateDto } from './flowers.dto';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('Flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
  })
  @ApiBody({
    type: FlowersCreateDto,
    description: 'Json structure for flower object',
  })
  create(@Body() dto: FlowersCreateDto) {
    return this.flowersService.createFlower(dto);
  }
}
