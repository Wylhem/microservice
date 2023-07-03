import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSinisterDto {
  @IsString()
  @IsNotEmpty()
  label: string;
}
