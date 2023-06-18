import { IsNumber } from 'class-validator';

export class CreateContractDto {
  @IsNumber()
  status: number;
}
