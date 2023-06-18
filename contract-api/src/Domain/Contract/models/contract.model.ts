import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

@Exclude()
export class ContractsModel {
  @Expose()
  @IsNumber()
  id: number;

  @IsNumber()
  status: number;

  @Expose()
  @IsDate()
  updatedAt: Date;

  @Expose()
  @IsDate()
  createdAt: Date;

  constructor(partial: Partial<ContractsModel>) {
    Object.assign(this, partial);
  }
}
