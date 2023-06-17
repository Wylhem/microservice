import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumber, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;
}
