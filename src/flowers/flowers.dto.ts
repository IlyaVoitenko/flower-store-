import { IsNumber, IsString } from 'class-validator';

export class FlowersCreateDto {
  @IsString()
  name: string;
  @IsNumber()
  price: number;

  @IsString()
  color: string;
}
export type TFlowersUpdateDto = Partial<FlowersCreateDto>;
