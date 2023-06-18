import { IsNumber } from 'class-validator';

export class UpdateContractDto {
  @IsNumber()
  id: number;

  @IsNumber()
  status: number;
}
