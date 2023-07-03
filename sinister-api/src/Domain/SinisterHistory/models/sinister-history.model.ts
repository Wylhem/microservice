import { Exclude, Expose, Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';
import { ProfileModel } from '../../../../../user-api/src/Domain/Profile/models/profile.model';
import { SinistersModel } from 'src/Domain/Sinister/models/sinister.model';

@Exclude()
export class SinistersHistoryModel {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsDate()
  date: Date;

  @Expose()
  @IsDate()
  updatedAt: Date;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @Type(() => Contractmodel)
  contract?: Contractmodel;

  @Expose()
  @Type(() => SubscriptionModel)
  subscription?: SubscriptionModel;

  @Expose()
  @Type(() => SinistersModel)
  sinisters?: SinistersModel;

  @Expose()
  @Type(() => ProfileModel)
  profile?: ProfileModel;

  constructor(partial: Partial<SinistersModel>) {
    Object.assign(this, partial);
  }
}
