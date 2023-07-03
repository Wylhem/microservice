import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

@Exclude()
export class SinistersModel {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  label: string;

  @Expose()
  @IsDate()
  updatedAt: Date;

  @Expose()
  @IsDate()
  createdAt: Date;

  constructor(partial: Partial<SinistersModel>) {
    Object.assign(this, partial);
  }
}
