import { IsEmail, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;
}
