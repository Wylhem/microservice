import { IsNumber, IsString } from 'class-validator';

export class UpdateSinisterDto {
  @IsNumber()
  id: number;

  @IsString()
  label: string;
}
