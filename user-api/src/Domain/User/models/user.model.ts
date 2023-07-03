import { Exclude, Expose, Type } from 'class-transformer';
import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { ProfileModel } from '../../Profile/models/profile.model';

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

  @Expose()
  @Type(() => ProfileModel)
  profile?: ProfileModel;

  constructor(partial: Partial<UsersModel>) {
    Object.assign(this, partial);
  }
}
