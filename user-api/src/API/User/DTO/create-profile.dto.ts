import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
