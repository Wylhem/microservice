import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

@Exclude()
export class UsersModel {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @Expose()
  @IsDate()
  updatedAt: Date;

  @Expose()
  @IsDate()
  createdAt: Date;

  constructor(partial: Partial<UsersModel>) {
    Object.assign(this, partial);
  }
}
