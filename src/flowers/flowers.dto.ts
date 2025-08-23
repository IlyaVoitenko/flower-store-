import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FlowersCreateDto {
  @IsString()
  @ApiProperty({
    example: 'Rose',
    required: true,
  })
  name: string;
  @IsNumber()
  @ApiProperty({
    example: 10,
    required: true,
  })
  price: number;
  @ApiProperty({
    example: 'red',
    required: true,
  })
  @IsString()
  color: string;
}
export type TFlowersUpdateDto = Partial<FlowersCreateDto>;
